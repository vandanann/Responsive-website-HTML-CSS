import './style.css'



document.querySelector('#app').innerHTML = `
<section id="center">
     <nav class="Navbar inline">
      <div class="inline content-3 space-between">
        <a href="/" class="Logo block-center-center">
          <img
            src="https://raw.githubusercontent.com/mobalti/open-props-interfaces/d5b9f6bbe2a03e3308fda4f939e2c4a8e1b0239a/assets/logo/op-logo-w-w-t.svg"
            alt="Open Props logo"
          />
        </a>
        <div class="Menu inline-center-center">
          <div class="NavItem block-center-center">
            <a href="/" class="NavLink block-center-center"
              ><span class="NavLinkTitle">Movies</span
              ><span class="NavIcon"><i class="ri-film-line"></i></span
            ></a>

            <div class="ItemContent block gap-2">
              <div class="ItemTitle">Explore</div>

              <ul class="block content-1 gap-2">
                <li><a href="#">Release Calendar</a></li>

                <li><a href="#">Top 250 Movies</a></li>

                <li><a href="#">Most Popular Movies</a></li>

                <li><a href="#">Browse Movies by Genre</a></li>

                <li><a href="#">Top Box Office</a></li>

                <li><a href="#">Showtimes & Tickets</a></li>

                <li><a href="#">Movie News</a></li>
                <li><a href="#">India Movie Spotlight</a></li>
              </ul>
            </div>
          </div>
          <div class="NavItem block-center-center">
            <a href="/" class="NavLink block-center-center"
              ><span class="NavLinkTitle">Tv Shows</span>
              <span class="NavIcon"><i class="ri-tv-2-line"></i></span
            ></a>
            <div class="ItemContent block gap-2">
              <div class="ItemTitle">Explore TV Shows</div>
              <ul class="block content-1 gap-2">
                <li><a href="#">What's on TV & Streaming</a></li>

                <li><a href="#">Top 250 TV Shows</a></li>

                <li><a href="#">Most Popular TV Shows</a></li>

                <li><a href="#">Browse TV Shows by Genre</a></li>

                <li><a href="#">TV News</a></li>
              </ul>
            </div>
          </div>
          <div class="NavItem block-center-center">
            <a href="/" class="NavLink block-center-center"
              ><span class="NavLinkTitle">Awards & Events</span
              ><span class="NavIcon"><i class="ri-award-line"></i></span
            ></a>
            <div class="ItemContent block gap-2">
              <div class="ItemTitle">Celebrating Excellence</div>
              <ul class="block content-1 gap-2">
                <li><a href="#">Oscars</a></li>
                <li><a href="#">Emmys</a></li>
                <li><a href="#">Best Of 2023</a></li>
                <li><a href="#">Holiday Picks</a></li>
                <li><a href="#">STARmeter Awards</a></li>
                <li><a href="#">Awards Central</a></li>
                <li><a href="#">Festival Central</a></li>
                <li><a href="#">All Events</a></li>
              </ul>
            </div>
          </div>
          <div class="NavItem block-center-center">
            <a href="/" class="NavLink block-center-center"
              ><span class="NavLinkTitle">Celebs</span
              ><span class="NavIcon"><i class="ri-team-line"></i></span
            ></a>
            <div class="ItemContent block gap-2">
              <div class="ItemTitle">Spotlight on Celebrities</div>
              <ul class="block content-1 gap-2">
                <li><a href="#">Born Today</a></li>
                <li><a href="#">Most Popular Celebs</a></li>
                <li><a href="#">Celebrity News</a></li>
              </ul>
            </div>
          </div>
          <div class="NavItem block-center-center">
            <a href="/" class="NavLink block-center-center"
              ><span class="NavLinkTitle">Community</span
              ><span class="NavIcon"><i class="ri-community-line"></i></span
            ></a>
            <div class="ItemContent block gap-2">
              <div class="ItemTitle">Join the Community</div>
              <ul class="block content-1 gap-2">
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Contributor Zone</a></li>
                <li><a href="#">Polls</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div class="inline-center-center gap-3">
          <a href="#" class="ButtonLink">Sign In</a>
        </div>
      </div>
    </nav>

    <main class="Main block">
      <div class="CarouselWrapper">
        <section class="Carousel inline">
          <figure>
            <picture>
              <source
                srcset="
                  https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/dropdown-menu/images/img-1-desktop.webp
                "
                media="(width >= 768px)"
                type="image/avif"
              />
              <source
                srcset="
                  https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/dropdown-menu/images/img-1-mobile.webp
                "
                type="image/avif"
              />

              <source
                srcset="
                  https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/dropdown-menu/images/img-1-desktop.webp
                "
                media="(width >= 768px)"
                type="image/webp"
              />
              <img
                src="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/dropdown-menu/images/img-1-mobile.webp"
                alt="New Year Celebrations"
              />
            </picture>
          </figure>
          <figure>
            <picture>
              <source
                srcset="
                  https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/dropdown-menu/images/img-2-desktop.webp
                "
                media="(width >= 768px)"
                type="image/avif"
              />
              <source
                srcset="
                  https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/dropdown-menu/images/img-2-mobile.webp
                "
                type="image/avif"
              />

              <source
                srcset="
                  https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/dropdown-menu/images/img-2-desktop.webp
                "
                media="(width >= 768px)"
                type="image/webp"
              />
              <img
                src="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/dropdown-menu/images/img-2-mobile.webp"
                alt="New Year Celebrations"
              />
            </picture>
          </figure>
          <figure>
            <picture>
              <source
                srcset="
                  https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/dropdown-menu/images/img-3-desktop.webp
                "
                media="(width >= 768px)"
                type="image/avif"
              />
              <source
                srcset="
                  https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/dropdown-menu/images/img-3-mobile.webp
                "
                type="image/avif"
              />

              <source
                srcset="
                  https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/dropdown-menu/images/img-3-desktop.webp
                "
                media="(width >= 768px)"
                type="image/webp"
              />
              <img
                src="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/dropdown-menu/images/img-3-mobile.webp"
                alt="New Year Celebrations"
              />
            </picture>
          </figure>
          <figure>
            <picture>
              <source
                srcset="
                  https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/dropdown-menu/images/img-4-desktop.webp
                "
                media="(width >= 768px)"
                type="image/avif"
              />
              <source
                srcset="
                  https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/dropdown-menu/images/img-4-mobile.webp
                "
                type="image/avif"
              />

              <source
                srcset="
                  https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/dropdown-menu/images/img-4-desktop.webp
                "
                media="(width >= 768px)"
                type="image/webp"
              />
              <img
                src="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/dropdown-menu/images/img-4-mobile.webp"
                alt="New Year Celebrations"
              />
            </picture>
          </figure>
          <figure>
            <picture>
              <source
                srcset="
                  https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/dropdown-menu/images/img-5-desktop.webp
                "
                media="(width >= 768px)"
                type="image/avif"
              />
              <source
                srcset="
                  https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/dropdown-menu/images/img-5-mobile.webp
                "
                type="image/avif"
              />

              <source
                srcset="
                  https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/dropdown-menu/images/img-5-desktop.webp
                "
                media="(width >= 768px)"
                type="image/webp"
              />
              <img
                src="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/dropdown-menu/images/img-5-mobile.webp"
                alt="New Year Celebrations"
              />
            </picture>
          </figure>
          <figure>
            <picture>
              <source
                srcset="
                  https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/dropdown-menu/images/img-1-desktop.webp
                "
                media="(width >= 768px)"
                type="image/avif"
              />
              <source
                srcset="
                  https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/dropdown-menu/images/img-1-mobile.webp
                "
                type="image/avif"
              />

              <source
                srcset="
                  https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/dropdown-menu/images/img-1-desktop.webp
                "
                media="(width >= 768px)"
                type="image/webp"
              />
              <img
                src="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/dropdown-menu/images/img-1-mobile.webp"
                alt="New Year Celebrations"
              />
            </picture>
          </figure>
        </section>
      </div>

      <footer>
        <div class="CodePen block-center-end">
          <p>CodePen.io</p>
        </div>
      </footer>
    </main>

  
</section>


`

 
