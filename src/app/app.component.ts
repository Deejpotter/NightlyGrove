import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { merge } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { environment } from '@env/environment';
import { Logger, UntilDestroy, untilDestroyed } from 'src/app/shared';
import { I18nService } from '@app/i18n';
import { footerFadeIn, routeAnimations } from '../assets/scripts/animations';

const log = new Logger('App');

/**
 * AppComponent is the root component of the Angular application.
 * It handles the overall layout, page title, route transitions, and footer animations.
 *
 * @module AppComponent
 * @selector app-root
 * @templateUrl ./app.component.html
 * @styleUrls ['./app.component.scss']
 * @animations [routeAnimations, footerFadeIn]
 * @implements {OnInit, OnDestroy}
 * @property {boolean} isLoading - Represents the loading state of the application.
 * @property {string} footerState - Represents the animation state of the footer.
 *
 */
@UntilDestroy()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimations, footerFadeIn],
})
export class AppComponent implements OnInit, OnDestroy {
  isLoading: boolean = true;
  footerState = 'hidden';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private translateService: TranslateService,
    private i18nService: I18nService
  ) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationStart || event instanceof NavigationEnd))
      .subscribe((event) => {
        if (event instanceof NavigationStart) {
          this.isLoading = true;
        } else if (event instanceof NavigationEnd) {
          this.isLoading = false;
        }
      });
  }

  /**
   * Prepares the route animation data.
   * @param {RouterOutlet} outlet - The RouterOutlet instance.
   * @returns {*} - The animation data for the current route.
   */
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  ngOnInit() {
    // Setup logger
    if (environment.production) {
      Logger.enableProductionMode();
    }

    log.debug('init');

    // Setup translations
    this.i18nService.init(environment.defaultLanguage, environment.supportedLanguages);

    const onNavigationEnd = this.router.events.pipe(filter((event) => event instanceof NavigationEnd));

    // Change page title on navigation or language change, based on route data
    merge(this.translateService.onLangChange, onNavigationEnd)
      .pipe(
        map(() => {
          let route = this.activatedRoute;
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        filter((route) => route.outlet === 'primary'),
        switchMap((route) => route.data),
        untilDestroyed(this)
      )
      .subscribe((event) => {
        const title = event['title'];
        if (title) {
          this.titleService.setTitle(this.translateService.instant(title));
        }
      });

    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((event) => {
      this.footerState = 'hidden';
      setTimeout(() => {
        this.footerState = 'visible';
      }, 0);
    });
  }

  ngOnDestroy() {
    this.i18nService.destroy();
  }
}
