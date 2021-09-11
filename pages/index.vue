<template>
  <main>
    <Hero />
    <Portfolio />

    <section class="services section section_py">
      <div class="container">
        <div class="section-introduce">
          <h2 class="h2 section-title">
            Services
          </h2>
          <div class="g-row section-introduce__text">
            <div class="g-col g-col_52 g-col_t-75 g-col_m-100">
              Quality, terms and comfortable cost of services are provided by
              the expertise of our developers and managers
            </div>
          </div>
        </div><!-- /section-introduce -->

        <div class="g-row g-row_wrap">
          <div class="g-col g-col_50 g-col_s-100 services__item">
            <a href="/portfolio/" class="services-card" :style="styleObject['web']">
              <span class="services-card__content">
                <span class="services-card__title h3 text-grey">
                  WEB & MOBILE
                </span>
                <span class="services-card__text">
                  Web and mobile applications development
                </span>
                <span class="services-card__bottom">
                  <span class="link text-grey-medium">
                    <span class="link__text">View projects</span>
                    <span class="link__icon">
                      <svg-icon name="sp-chevron-right" />
                    </span>
                  </span>
                </span>
              </span>
            </a><!-- /services-card -->
          </div>

          <div class="g-col g-col_50 g-col_s-100 services__item">
            <a
              href="/portfolio/"
              class="services-card"
              :style="styleObject['3d']"
            >
              <span class="services-card__content">
                <span class="services-card__title h3 text-grey">
                  3D/AR
                </span>
                <span class="services-card__text">
                  Development of web and mobile applications using 3D technologies and
                  augmented reality (AR) technologies
                </span>
                <span class="services-card__bottom">
                  <span class="link text-grey-medium">
                    <span class="link__text">View projects</span>
                    <span class="link__icon">
                      <svg-icon name="sp-chevron-right" />
                    </span>
                  </span>
                </span>
              </span>
            </a><!-- /services-card -->
          </div>

          <div class="g-col g-col_50 g-col_s-100 services__item">
            <a
              href="/portfolio/"
              class="services-card"
              :style="styleObject['analysis']"
            >
              <span class="services-card__content">
                <span class="services-card__title h3 text-grey">
                  BUSINESS ANALYSIS
                </span>
                <span class="services-card__text">
                  Systematic business analysis for the further digitalization of business
                </span>
                <span class="services-card__bottom">
                  <span class="link text-grey-medium">
                    <span class="link__text">View projects</span>
                    <span class="link__icon">
                      <svg-icon name="sp-chevron-right" />
                    </span>
                  </span>
                </span>
              </span>
            </a><!-- /services-card -->
          </div>

          <div class="g-col g-col_50 g-col_s-100 services__item">
            <a
              href="/portfolio/"
              class="services-card"
              :style="styleObject['crm']"
            >
              <span class="services-card__content">
                <span class="services-card__title h3 text-grey">
                  CRM/ERP
                </span>
                <span class="services-card__text">
                  CRM and ERP systems development
                </span>
                <span class="services-card__bottom">
                  <span class="link text-grey-medium">
                    <span class="link__text">View projects</span>
                    <span class="link__icon">
                      <svg-icon name="sp-chevron-right" />
                    </span>
                  </span>
                </span>
              </span>
            </a><!-- /services-card -->
          </div>
        </div>
      </div>
    </section>

    <section class="technologies is-start section section_white section_py js-technologies">
      <div class="container">
        <div class="section-introduce">
          <h2 class="h2 section-title">
            Technologies
          </h2>
          <div class="g-row section-introduce__text">
            <div class="g-col g-col_50 g-col_t-75 g-col_m-100">
              <span class="text-blue">“</span>
              We use advanced technologies and tools for programming, design, layout, 3D and
              AR-modeling
              at an expert level
              <span class="text-blue">”</span>
            </div>
          </div>
        </div><!-- /section-introduce -->
      </div> <!-- /container -->

      <div class="technologies__slider">
        <div class="swiper-container js-technologies-slider js-animate-slider1">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="~/assets/img/content/logo1.jpg" alt="logo">
            </div>
            <div class="swiper-slide">
              <img src="~/assets/img/content/logo2.jpg" alt="logo">
            </div>
            <div class="swiper-slide">
              <img src="~/assets/img/content/logo3.jpg" alt="logo">
            </div>
            <div class="swiper-slide">
              <img src="~/assets/img/content/logo4.jpg" alt="logo">
            </div>
            <div class="swiper-slide">
              <img src="~/assets/img/content/logo5.jpg" alt="logo">
            </div>
            <div class="swiper-slide">
              <img src="~/assets/img/content/logo6.jpg" alt="logo">
            </div>
            <div class="swiper-slide">
              <img src="~/assets/img/content/logo7.jpg" alt="logo">
            </div>
            <div class="swiper-slide">
              <img src="~/assets/img/content/logo22.jpg" alt="logo">
            </div>
            <div class="swiper-slide">
              <img src="~/assets/img/content/logo25.jpg" alt="logo">
            </div>
            <div class="swiper-slide">
              <img src="~/assets/img/content/logo28.jpg" alt="logo">
            </div>
            <div class="swiper-slide">
              <img src="~/assets/img/content/logo31.jpg" alt="logo">
            </div>
            <div class="swiper-slide">
              <img src="~/assets/img/content/logo34.jpg" alt="logo">
            </div>
            <div class="swiper-slide">
              <img src="~/assets/img/content/logo37.jpg" alt="logo">
            </div>
          </div>
        </div>
      </div><!-- /technologies__slider -->

      <div class="technologies__slider">
        <div dir="rtl" class="swiper-container js-technologies-slider js-animate-slider2">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="~/assets/img/content/logo8.jpg" alt="logo">
            </div>
            <div class="swiper-slide">
              <img src="~/assets/img/content/logo9.jpg" alt="logo">
            </div>
            <div class="swiper-slide">
              <img src="~/assets/img/content/logo10.jpg" alt="logo">
            </div>
            <div class="swiper-slide">
              <img src="~/assets/img/content/logo21.jpg" alt="logo">
            </div>
            <div class="swiper-slide">
              <img src="~/assets/img/content/logo12.jpg" alt="logo">
            </div>
            <div class="swiper-slide">
              <img src="~/assets/img/content/logo13.jpg" alt="logo">
            </div>
            <div class="swiper-slide">
              <img src="~/assets/img/content/logo14.jpg" alt="logo">
            </div>
            <div class="swiper-slide">
              <img src="~/assets/img/content/logo23.jpg" alt="logo">
            </div>
            <div class="swiper-slide">
              <img src="~/assets/img/content/logo26.jpg" alt="logo">
            </div>
            <div class="swiper-slide">
              <img src="~/assets/img/content/logo29.jpg" alt="logo">
            </div>
            <div class="swiper-slide">
              <img src="~/assets/img/content/logo32.jpg" alt="logo">
            </div>
            <div class="swiper-slide">
              <img src="~/assets/img/content/logo35.jpg" alt="logo">
            </div>
            <div class="swiper-slide">
              <img src="~/assets/img/content/logo38.jpg" alt="logo">
            </div>
          </div>
        </div>
      </div><!-- /technologies__slider -->

      <div class="technologies__slider">
        <div class="swiper-container js-technologies-slider js-animate-slider3">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="~/assets/img/content/logo15.jpg" alt="logo">
            </div>
            <div class="swiper-slide">
              <img src="~/assets/img/content/logo16.jpg" alt="logo">
            </div>
            <div class="swiper-slide">
              <img src="~/assets/img/content/logo17.jpg" alt="logo">
            </div>
            <div class="swiper-slide">
              <img src="~/assets/img/content/logo18.jpg" alt="logo">
            </div>
            <div class="swiper-slide">
              <img src="~/assets/img/content/logo19.jpg" alt="logo">
            </div>
            <div class="swiper-slide">
              <img src="~/assets/img/content/logo20.jpg" alt="logo">
            </div>
            <div class="swiper-slide">
              <img src="~/assets/img/content/logo21.jpg" alt="logo">
            </div>
            <div class="swiper-slide">
              <img src="~/assets/img/content/logo24.jpg" alt="logo">
            </div>
            <div class="swiper-slide">
              <img src="~/assets/img/content/logo27.jpg" alt="logo">
            </div>
            <div class="swiper-slide">
              <img src="~/assets/img/content/logo30.jpg" alt="logo">
            </div>
            <div class="swiper-slide">
              <img src="~/assets/img/content/logo33.jpg" alt="logo">
            </div>
            <div class="swiper-slide">
              <img src="~/assets/img/content/logo36.jpg" alt="logo">
            </div>
            <div class="swiper-slide">
              <img src="~/assets/img/content/logo39.jpg" alt="logo">
            </div>
          </div>
        </div>
      </div><!-- /technologies__slider -->
    </section>

    <section class="team section section_white section_py">
      <div class="container">
        <div class="section-introduce">
          <h2 class="h2 section-title">
            Team & System
          </h2>

          <h5 class="h5 mobile-show">
            Team
          </h5>

          <div class="g-row g-row_wrap section-introduce__text">
            <div class="g-col g-col_66 text-bold g-col_m-100">
              Team and system keys aspects of IT-business. Team (people) -
              <span class="text-blue text-bold">the first.</span>
              Management system -
              <span class="text-blue text-bold">the second.</span>
              First doesn’t work
              <span class="text-blue text-bold">without second.</span>
            </div>

            <div class="g-col g-col_33 g-col_m-100">
              <div class="text-grey-dark h6">
                The number of employees:
              </div>
              <!--              <div class="h5">{{ meta.employees }} employees</div>-->
            </div>
          </div>
        </div><!-- /section-introduce -->

        <h5 class="h5 mobile-hidden">
          Team
        </h5>

        <div class="team__slider">
          <div class="swiper-container js-team-slider">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="team-member">
                  <div class="team-member__image">
                    <img src="~/assets/img/content/avatar1.jpg" alt="avatar">
                  </div>
                  <div class="team-member__content">
                    <div class="team-member__item">
                      <div class="team-member__title text-grey">
                        Name:
                      </div>
                      <div class="team-member__text">
                        Igor Vasilev
                      </div>
                    </div>

                    <div class="team-member__item">
                      <div class="team-member__title text-grey">
                        Work experience:
                      </div>
                      <div class="team-member__text">
                        10 year
                      </div>
                    </div>

                    <div class="team-member__item">
                      <div class="team-member__title text-grey">
                        Activity:
                      </div>
                      <div class="team-member__text">
                        Backend Developer
                      </div>
                    </div>
                  </div><!-- /team-member__content -->
                </div><!-- /team-member -->
              </div>

              <div class="swiper-slide">
                <div class="team-member">
                  <div class="team-member__image">
                    <img src="~/assets/img/content/avatar2.jpg" alt="avatar">
                  </div>
                  <div class="team-member__content">
                    <div class="team-member__item">
                      <div class="team-member__title text-grey">
                        Name:
                      </div>
                      <div class="team-member__text">
                        Igor Vasilev
                      </div>
                    </div>

                    <div class="team-member__item">
                      <div class="team-member__title text-grey">
                        Work experience:
                      </div>
                      <div class="team-member__text">
                        10 year
                      </div>
                    </div>

                    <div class="team-member__item">
                      <div class="team-member__title text-grey">
                        Activity:
                      </div>
                      <div class="team-member__text">
                        Frontend Developer
                      </div>
                    </div>
                  </div><!-- /team-member__content -->
                </div><!-- /team-member -->
              </div>

              <div class="swiper-slide">
                <div class="team-member">
                  <div class="team-member__image">
                    <img src="~/assets/img/content/avatar3.jpg" alt="avatar">
                  </div>
                  <div class="team-member__content">
                    <div class="team-member__item">
                      <div class="team-member__title text-grey">
                        Name:
                      </div>
                      <div class="team-member__text">
                        Igor Vasilev
                      </div>
                    </div>

                    <div class="team-member__item">
                      <div class="team-member__title text-grey">
                        Work experience:
                      </div>
                      <div class="team-member__text">
                        10 year
                      </div>
                    </div>

                    <div class="team-member__item">
                      <div class="team-member__title text-grey">
                        Activity:
                      </div>
                      <div class="team-member__text">
                        Designer
                      </div>
                    </div>
                  </div><!-- /team-member__content -->
                </div><!-- /team-member -->
              </div>

              <div class="swiper-slide">
                <div class="team-member">
                  <div class="team-member__image">
                    <img src="~/assets/img/content/avatar4.jpg" alt="avatar">
                  </div>
                  <div class="team-member__content">
                    <div class="team-member__item">
                      <div class="team-member__title text-grey">
                        Name:
                      </div>
                      <div class="team-member__text">
                        Igor Vasilev
                      </div>
                    </div>

                    <div class="team-member__item">
                      <div class="team-member__title text-grey">
                        Work experience:
                      </div>
                      <div class="team-member__text">
                        10 year
                      </div>
                    </div>

                    <div class="team-member__item">
                      <div class="team-member__title text-grey">
                        Activity:
                      </div>
                      <div class="team-member__text">
                        Frontend Developer
                      </div>
                    </div>
                  </div><!-- /team-member__content -->
                </div><!-- /team-member -->
              </div>
            </div>
          </div>
        </div><!-- /team__slider -->
      </div> <!-- /container -->
    </section>

    <section class="system section section_white section_pb">
      <div class="container">
        <div class="section-introduce">
          <h5 class="h5">
            System
          </h5>

          <div class="g-row section-introduce__text">
            <div class="g-col g-col_59 text-bold g-col_t-75 g-col_m-100">
              <p>We apply a systemic approach to business and its development.</p>
              <p>
                We are constantly
                developing each of the systems and
                subsystems of management.
              </p>
            </div>
          </div>
        </div><!-- /section-introduce -->

        <div class="system-data">
          <div class="system-data__table">
            <table class="table">
              <thead>
                <tr>
                  <th rowspan="2" class="table_dark">
                    ACTIONS
                  </th>
                  <th colspan="3" class="table_blue">
                    PRODUCTION
                  </th>
                  <th rowspan="2" class="table_purple">
                    MARKETING AND COMMERCE
                  </th>
                  <th rowspan="2" class="table_red">
                    ACCOUNTING AND FINANCE
                  </th>
                  <th rowspan="2" class="table_orange">
                    HR
                  </th>
                  <th rowspan="2" class="table_light-blue">
                    R&D
                  </th>
                </tr>
                <tr>
                  <th class="table_blue1">
                    QUALITY
                  </th>
                  <th class="table_blue2">
                    TIME
                  </th>
                  <th class="table_blue3">
                    COST
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="table_dark">
                    <div class="table__title">
                      Planing
                    </div>
                  </td>
                  <td class="table_blue1">
                    <div class="table__inside">
                      Quality planing system
                    </div>
                    <div class="table__add">
                      Quality planing system
                    </div>
                  </td>
                  <td class="table_blue2">
                    <div class="table__inside">
                      Time planing system
                    </div>
                    <div class="table__add">
                      Time planing system
                    </div>
                  </td>
                  <td class="table_blue3">
                    <div class="table__inside">
                      Cost planing system
                    </div>
                    <div class="table__add">
                      Cost planing system
                    </div>
                  </td>
                  <td class="table_purple">
                    <div class="table__inside">
                      Marketing and commerce planing system
                    </div>
                    <div class="table__add">
                      Marketing and commerce planing system
                    </div>
                  </td>
                  <td class="table_red">
                    <div class="table__inside">
                      Accounting and Finance planing system
                    </div>
                    <div class="table__add">
                      Accounting and Finance planing system
                    </div>
                  </td>
                  <td class="table_orange">
                    <div class="table__inside">
                      R&D planing system
                    </div>
                    <div class="table__add">
                      R&D planing system
                    </div>
                  </td>
                  <td class="table_light-blue">
                    <div class="table__inside">
                      R&D planing system
                    </div>
                    <div class="table__add">
                      R&D planing system
                    </div>
                  </td>
                </tr>

                <tr>
                  <td class="table_dark">
                    <div class="table__title">
                      Organization
                    </div>
                  </td>
                  <td class="table_blue1">
                    <div class="table__inside">
                      Quality management system
                    </div>
                    <div class="table__add">
                      Quality management system
                    </div>
                  </td>
                  <td class="table_blue2">
                    <div class="table__inside">
                      Time management system
                    </div>
                    <div class="table__add">
                      Time management system
                    </div>
                  </td>
                  <td class="table_blue3">
                    <div class="table__inside">
                      Cost management system
                    </div>
                    <div class="table__add">
                      Cost management system
                    </div>
                  </td>
                  <td class="table_purple">
                    <div class="table__inside">
                      Marketing and commerce management system
                    </div>
                    <div class="table__add">
                      Marketing and commerce management system
                    </div>
                  </td>
                  <td class="table_red">
                    <div class="table__inside">
                      Accounting and Finance management system
                    </div>
                    <div class="table__add">
                      Accounting and Finance management system
                    </div>
                  </td>
                  <td class="table_orange">
                    <div class="table__inside">
                      R&D management system
                    </div>
                    <div class="table__add">
                      R&D management system
                    </div>
                  </td>
                  <td class="table_light-blue">
                    <div class="table__inside">
                      R&D management system
                    </div>
                    <div class="table__add">
                      R&D management system
                    </div>
                  </td>
                </tr>

                <tr>
                  <td class="table_dark">
                    <div class="table__title">
                      Control
                    </div>
                  </td>
                  <td class="table_blue1">
                    <div class="table__inside">
                      Quality control system
                    </div>
                    <div class="table__add">
                      Quality control system
                    </div>
                  </td>
                  <td class="table_blue2">
                    <div class="table__inside">
                      Time control system
                    </div>
                    <div class="table__add">
                      Time control system
                    </div>
                  </td>
                  <td class="table_blue3">
                    <div class="table__inside">
                      Cost control system
                    </div>
                    <div class="table__add">
                      Cost control system
                    </div>
                  </td>
                  <td class="table_purple">
                    <div class="table__inside">
                      Marketing and commerce control system
                    </div>
                    <div class="table__add">
                      Marketing and commerce control system
                    </div>
                  </td>
                  <td class="table_red">
                    <div class="table__inside">
                      Accounting and Finance control system
                    </div>
                    <div class="table__add">
                      Accounting and Finance control system
                    </div>
                  </td>
                  <td class="table_orange">
                    <div class="table__inside">
                      R&D control system
                    </div>
                    <div class="table__add">
                      R&D control system
                    </div>
                  </td>
                  <td class="table_light-blue">
                    <div class="table__inside">
                      R&D control system
                    </div>
                    <div class="table__add">
                      R&D control system
                    </div>
                  </td>
                </tr>

                <tr>
                  <td class="table_dark">
                    <div class="table__title">
                      Improvement
                    </div>
                  </td>
                  <td class="table_blue1">
                    <div class="table__inside">
                      Quality improvement system
                    </div>
                    <div class="table__add">
                      Quality improvement system
                    </div>
                  </td>
                  <td class="table_blue2">
                    <div class="table__inside">
                      Time improvement system
                    </div>
                    <div class="table__add">
                      Time improvement system
                    </div>
                  </td>
                  <td class="table_blue3">
                    <div class="table__inside">
                      Cost improvement system
                    </div>
                    <div class="table__add">
                      Cost improvement system
                    </div>
                  </td>
                  <td class="table_purple">
                    <div class="table__inside">
                      Marketing and commerce improvement system
                    </div>
                    <div class="table__add">
                      Marketing and commerce improvement system
                    </div>
                  </td>
                  <td class="table_red">
                    <div class="table__inside">
                      Accounting and Finance improvement system
                    </div>
                    <div class="table__add">
                      Accounting and Finance improvement system
                    </div>
                  </td>
                  <td class="table_orange">
                    <div class="table__inside">
                      R&D emprovement system
                    </div>
                    <div class="table__add">
                      R&D emprovement system
                    </div>
                  </td>
                  <td class="table_light-blue">
                    <div class="table__inside">
                      R&D emprovement system
                    </div>
                    <div class="table__add">
                      R&D emprovement system
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div><!-- /system-data__table -->

          <div class="system-data__accordion">
            <div class="system-data__item">
              <div class="accordion js-accordion">
                <div class="accordion-button accordion-button_blue js-accordion-button">
                  <div class="accordion-button__text">
                    PRODUCTION
                  </div>
                  <div class="accordion-button__icon" />
                </div>

                <div class="accordion-block js-accordion-block">
                  <div class="accordion js-accordion-inside">
                    <div class="accordion-button accordion-button_dark js-accordion-button-inside">
                      <div class="accordion-button__text">
                        planning
                      </div>
                      <div class="accordion-button__icon" />
                    </div>

                    <div class="accordion-block accordion-block_inside js-accordion-block-inside">
                      <div class="accordion-block__top">
                        <div class="g-row">
                          <div class="g-col g-col_50">
                            <div class="text-grey-medium text-semibold">
                              Quality
                            </div>
                          </div>
                          <div class="g-col g-col_50">
                            Quality planing system
                          </div>
                        </div>
                      </div><!-- /accordion-block__top -->

                      <div class="accordion-block__text">
                        We apply a systemic approach to business and its development. We are
                        constantly developing each of the systems and
                        subsystems of management.
                      </div>

                      <div class="accordion-block__top">
                        <div class="g-row">
                          <div class="g-col g-col_50">
                            <div class="text-grey-medium text-semibold">
                              Time
                            </div>
                          </div>
                          <div class="g-col g-col_50">
                            Time planing system
                          </div>
                        </div>
                      </div><!-- /accordion-block__top -->

                      <div class="accordion-block__text">
                        We apply a systemic approach to business and its development. We are
                        constantle developming each of the systems and
                        subsystems of management.
                      </div>

                      <div class="accordion-block__top">
                        <div class="g-row">
                          <div class="g-col g-col_50">
                            <div class="text-grey-medium text-semibold">
                              Cost
                            </div>
                          </div>
                          <div class="g-col g-col_50">
                            Cost planing system
                          </div>
                        </div>
                      </div><!-- /accordion-block__top -->

                      <div class="accordion-block__text">
                        We apply a systemic approach to business and its development. We are
                        constantle developming each of the systems and
                        subsystems of management.
                      </div>
                    </div><!-- /accordion-block -->
                  </div><!-- /accordion-inside-->

                  <div class="accordion js-accordion-inside">
                    <div class="accordion-button accordion-button_dark js-accordion-button-inside">
                      <div class="accordion-button__text">
                        ORGANIZATION
                      </div>
                      <div class="accordion-button__icon" />
                    </div>

                    <div class="accordion-block accordion-block_inside js-accordion-block-inside">
                      <div class="accordion-block__top">
                        <div class="g-row">
                          <div class="g-col g-col_50">
                            <div class="text-grey-medium text-semibold">
                              Quality
                            </div>
                          </div>
                          <div class="g-col g-col_50">
                            Quality planing system
                          </div>
                        </div>
                      </div><!-- /accordion-block__top -->

                      <div class="accordion-block__text">
                        We apply a systemic approach to business and its development. We are
                        constantle developming each of the systems and
                        subsystems of management.
                      </div>

                      <div class="accordion-block__top">
                        <div class="g-row">
                          <div class="g-col g-col_50">
                            <div class="text-grey-medium text-semibold">
                              Time
                            </div>
                          </div>
                          <div class="g-col g-col_50">
                            Time planing system
                          </div>
                        </div>
                      </div><!-- /accordion-block__top -->

                      <div class="accordion-block__text">
                        We apply a systemic approach to business and its development. We are
                        constantle developming each of the systems and
                        subsystems of management.
                      </div>

                      <div class="accordion-block__top">
                        <div class="g-row">
                          <div class="g-col g-col_50">
                            <div class="text-grey-medium text-semibold">
                              Cost
                            </div>
                          </div>
                          <div class="g-col g-col_50">
                            Cost planing system
                          </div>
                        </div>
                      </div><!-- /accordion-block__top -->

                      <div class="accordion-block__text">
                        We apply a systemic approach to business and its development. We are
                        constantle developming each of the systems and
                        subsystems of management.
                      </div>
                    </div><!-- /accordion-block -->
                  </div><!-- /accordion-inside-->

                  <div class="accordion js-accordion-inside">
                    <div
                      class="accordion-button accordion-button_dark js-accordion-button-inside"
                    >
                      <div class="accordion-button__text">
                        CONTROL
                      </div>
                      <div class="accordion-button__icon" />
                    </div>

                    <div
                      class="accordion-block accordion-block_inside js-accordion-block-inside"
                    >
                      <div class="accordion-block__top">
                        <div class="g-row">
                          <div class="g-col g-col_50">
                            <div class="text-grey-medium text-semibold">
                              Quality
                            </div>
                          </div>
                          <div class="g-col g-col_50">
                            Quality planing system
                          </div>
                        </div>
                      </div><!-- /accordion-block__top -->

                      <div class="accordion-block__text">
                        We apply a systemic approach to business and its development. We are
                        constantle developming each of the systems and
                        subsystems of management.
                      </div>

                      <div class="accordion-block__top">
                        <div class="g-row">
                          <div class="g-col g-col_50">
                            <div class="text-grey-medium text-semibold">
                              Time
                            </div>
                          </div>
                          <div class="g-col g-col_50">
                            Time planing system
                          </div>
                        </div>
                      </div><!-- /accordion-block__top -->

                      <div class="accordion-block__text">
                        We apply a systemic approach to business and its development. We are
                        constantle developming each of the systems and
                        subsystems of management.
                      </div>

                      <div class="accordion-block__top">
                        <div class="g-row">
                          <div class="g-col g-col_50">
                            <div class="text-grey-medium text-semibold">
                              Cost
                            </div>
                          </div>
                          <div class="g-col g-col_50">
                            Cost planing system
                          </div>
                        </div>
                      </div><!-- /accordion-block__top -->

                      <div class="accordion-block__text">
                        We apply a systemic approach to business and its development. We are
                        constantle developming each of the systems and
                        subsystems of management.
                      </div>
                    </div><!-- /accordion-block -->
                  </div><!-- /accordion-inside-->

                  <div class="accordion js-accordion-inside">
                    <div
                      class="accordion-button accordion-button_dark js-accordion-button-inside"
                    >
                      <div class="accordion-button__text">
                        eMPROVEMENT
                      </div>
                      <div class="accordion-button__icon" />
                    </div>

                    <div
                      class="accordion-block accordion-block_inside js-accordion-block-inside"
                    >
                      <div class="accordion-block__top">
                        <div class="g-row">
                          <div class="g-col g-col_50">
                            <div class="text-grey-medium text-semibold">
                              Quality
                            </div>
                          </div>
                          <div class="g-col g-col_50">
                            Quality planing system
                          </div>
                        </div>
                      </div><!-- /accordion-block__top -->

                      <div class="accordion-block__text">
                        We apply a systemic approach to business and its development. We are
                        constantle developming each of the systems and
                        subsystems of management.
                      </div>

                      <div class="accordion-block__top">
                        <div class="g-row">
                          <div class="g-col g-col_50">
                            <div class="text-grey-medium text-semibold">
                              Time
                            </div>
                          </div>
                          <div class="g-col g-col_50">
                            Time planing system
                          </div>
                        </div>
                      </div><!-- /accordion-block__top -->

                      <div class="accordion-block__text">
                        We apply a systemic approach to business and its development. We are
                        constantle developming each of the systems and
                        subsystems of management.
                      </div>

                      <div class="accordion-block__top">
                        <div class="g-row">
                          <div class="g-col g-col_50">
                            <div class="text-grey-medium text-semibold">
                              Cost
                            </div>
                          </div>
                          <div class="g-col g-col_50">
                            Cost planing system
                          </div>
                        </div>
                      </div><!-- /accordion-block__top -->

                      <div class="accordion-block__text">
                        We apply a systemic approach to business and its development. We are
                        constantle developming each of the systems and
                        subsystems of management.
                      </div>
                    </div><!-- /accordion-block -->
                  </div><!-- /accordion-inside-->
                </div>
              </div><!-- /accordion -->
            </div><!-- /system-data__item -->

            <div class="system-data__item">
              <div class="accordion js-accordion">
                <div class="accordion-button accordion-button_purple js-accordion-button">
                  <div class="accordion-button__text">
                    MARKETING AND COMMERCE
                  </div>
                  <div class="accordion-button__icon" />
                </div>

                <div class="accordion-block js-accordion-block">
                  <div class="accordion js-accordion-inside">
                    <div
                      class="accordion-button accordion-button_dark js-accordion-button-inside"
                    >
                      <div class="accordion-button__text">
                        planning
                      </div>
                      <div class="accordion-button__icon" />
                    </div>

                    <div
                      class="accordion-block accordion-block_inside js-accordion-block-inside"
                    >
                      <div class="accordion-block__top">
                        <div class="g-row">
                          <div class="g-col g-col_50">
                            <div class="text-grey-medium text-semibold">
                              Quality
                            </div>
                          </div>
                          <div class="g-col g-col_50">
                            Quality planing system
                          </div>
                        </div>
                      </div><!-- /accordion-block__top -->

                      <div class="accordion-block__text">
                        We apply a systemic approach to business and its development. We are
                        constantle developming each of the systems and
                        subsystems of management.
                      </div>

                      <div class="accordion-block__top">
                        <div class="g-row">
                          <div class="g-col g-col_50">
                            <div class="text-grey-medium text-semibold">
                              Time
                            </div>
                          </div>
                          <div class="g-col g-col_50">
                            Time planing system
                          </div>
                        </div>
                      </div><!-- /accordion-block__top -->

                      <div class="accordion-block__text">
                        We apply a systemic approach to business and its development. We are
                        constantle developming each of the systems and
                        subsystems of management.
                      </div>

                      <div class="accordion-block__top">
                        <div class="g-row">
                          <div class="g-col g-col_50">
                            <div class="text-grey-medium text-semibold">
                              Cost
                            </div>
                          </div>
                          <div class="g-col g-col_50">
                            Cost planing system
                          </div>
                        </div>
                      </div><!-- /accordion-block__top -->

                      <div class="accordion-block__text">
                        We apply a systemic approach to business and its development. We are
                        constantle developming each of the systems and
                        subsystems of management.
                      </div>
                    </div><!-- /accordion-block -->
                  </div><!-- /accordion-inside-->

                  <div class="accordion js-accordion-inside">
                    <div
                      class="accordion-button accordion-button_dark js-accordion-button-inside"
                    >
                      <div class="accordion-button__text">
                        ORGANIZATION
                      </div>
                      <div class="accordion-button__icon" />
                    </div>

                    <div
                      class="accordion-block accordion-block_inside js-accordion-block-inside"
                    >
                      <div class="accordion-block__top">
                        <div class="g-row">
                          <div class="g-col g-col_50">
                            <div class="text-grey-medium text-semibold">
                              Quality
                            </div>
                          </div>
                          <div class="g-col g-col_50">
                            Quality planing system
                          </div>
                        </div>
                      </div><!-- /accordion-block__top -->

                      <div class="accordion-block__text">
                        We apply a systemic approach to business and its development. We are
                        constantle developming each of the systems and
                        subsystems of management.
                      </div>

                      <div class="accordion-block__top">
                        <div class="g-row">
                          <div class="g-col g-col_50">
                            <div class="text-grey-medium text-semibold">
                              Time
                            </div>
                          </div>
                          <div class="g-col g-col_50">
                            Time planing system
                          </div>
                        </div>
                      </div><!-- /accordion-block__top -->

                      <div class="accordion-block__text">
                        We apply a systemic approach to business and its development. We are
                        constantle developming each of the systems and
                        subsystems of management.
                      </div>

                      <div class="accordion-block__top">
                        <div class="g-row">
                          <div class="g-col g-col_50">
                            <div class="text-grey-medium text-semibold">
                              Cost
                            </div>
                          </div>
                          <div class="g-col g-col_50">
                            Cost planing system
                          </div>
                        </div>
                      </div><!-- /accordion-block__top -->

                      <div class="accordion-block__text">
                        We apply a systemic approach to business and its development. We are
                        constantle developming each of the systems and
                        subsystems of management.
                      </div>
                    </div><!-- /accordion-block -->
                  </div><!-- /accordion-inside-->

                  <div class="accordion js-accordion-inside">
                    <div
                      class="accordion-button accordion-button_dark js-accordion-button-inside"
                    >
                      <div class="accordion-button__text">
                        CONTROL
                      </div>
                      <div class="accordion-button__icon" />
                    </div>

                    <div
                      class="accordion-block accordion-block_inside js-accordion-block-inside"
                    >
                      <div class="accordion-block__top">
                        <div class="g-row">
                          <div class="g-col g-col_50">
                            <div class="text-grey-medium text-semibold">
                              Quality
                            </div>
                          </div>
                          <div class="g-col g-col_50">
                            Quality planing system
                          </div>
                        </div>
                      </div><!-- /accordion-block__top -->

                      <div class="accordion-block__text">
                        We apply a systemic approach to business and its development. We are
                        constantle developming each of the systems and
                        subsystems of management.
                      </div>

                      <div class="accordion-block__top">
                        <div class="g-row">
                          <div class="g-col g-col_50">
                            <div class="text-grey-medium text-semibold">
                              Time
                            </div>
                          </div>
                          <div class="g-col g-col_50">
                            Time planing system
                          </div>
                        </div>
                      </div><!-- /accordion-block__top -->

                      <div class="accordion-block__text">
                        We apply a systemic approach to business and its development. We are
                        constantle developming each of the systems and
                        subsystems of management.
                      </div>

                      <div class="accordion-block__top">
                        <div class="g-row">
                          <div class="g-col g-col_50">
                            <div class="text-grey-medium text-semibold">
                              Cost
                            </div>
                          </div>
                          <div class="g-col g-col_50">
                            Cost planing system
                          </div>
                        </div>
                      </div><!-- /accordion-block__top -->

                      <div class="accordion-block__text">
                        We apply a systemic approach to business and its development. We are
                        constantle developming each of the systems and
                        subsystems of management.
                      </div>
                    </div><!-- /accordion-block -->
                  </div><!-- /accordion-inside-->

                  <div class="accordion js-accordion-inside">
                    <div
                      class="accordion-button accordion-button_dark js-accordion-button-inside"
                    >
                      <div class="accordion-button__text">
                        eMPROVEMENT
                      </div>
                      <div class="accordion-button__icon" />
                    </div>

                    <div
                      class="accordion-block accordion-block_inside js-accordion-block-inside"
                    >
                      <div class="accordion-block__top">
                        <div class="g-row">
                          <div class="g-col g-col_50">
                            <div class="text-grey-medium text-semibold">
                              Quality
                            </div>
                          </div>
                          <div class="g-col g-col_50">
                            Quality planing system
                          </div>
                        </div>
                      </div><!-- /accordion-block__top -->

                      <div class="accordion-block__text">
                        We apply a systemic approach to business and its development. We are
                        constantle developming each of the systems and
                        subsystems of management.
                      </div>

                      <div class="accordion-block__top">
                        <div class="g-row">
                          <div class="g-col g-col_50">
                            <div class="text-grey-medium text-semibold">
                              Time
                            </div>
                          </div>
                          <div class="g-col g-col_50">
                            Time planing system
                          </div>
                        </div>
                      </div><!-- /accordion-block__top -->

                      <div class="accordion-block__text">
                        We apply a systemic approach to business and its development. We are
                        constantle developming each of the systems and
                        subsystems of management.
                      </div>

                      <div class="accordion-block__top">
                        <div class="g-row">
                          <div class="g-col g-col_50">
                            <div class="text-grey-medium text-semibold">
                              Cost
                            </div>
                          </div>
                          <div class="g-col g-col_50">
                            Cost planing system
                          </div>
                        </div>
                      </div><!-- /accordion-block__top -->

                      <div class="accordion-block__text">
                        We apply a systemic approach to business and its development. We are
                        constantle developming each of the systems and
                        subsystems of management.
                      </div>
                    </div><!-- /accordion-block -->
                  </div><!-- /accordion-inside-->
                </div>
              </div><!-- /accordion -->
            </div><!-- /system-data__item -->

            <div class="system-data__item">
              <div class="accordion js-accordion">
                <div class="accordion-button accordion-button_red js-accordion-button">
                  <div class="accordion-button__text">
                    ACCOUNTING & FINANCE
                  </div>
                  <div class="accordion-button__icon" />
                </div>

                <div class="accordion-block js-accordion-block">
                  <div class="accordion js-accordion-inside">
                    <div
                      class="accordion-button accordion-button_dark js-accordion-button-inside"
                    >
                      <div class="accordion-button__text">
                        planning
                      </div>
                      <div class="accordion-button__icon" />
                    </div>

                    <div
                      class="accordion-block accordion-block_inside js-accordion-block-inside"
                    >
                      <div class="accordion-block__top">
                        <div class="g-row">
                          <div class="g-col g-col_50">
                            <div class="text-grey-medium text-semibold">
                              Quality
                            </div>
                          </div>
                          <div class="g-col g-col_50">
                            Quality planing system
                          </div>
                        </div>
                      </div><!-- /accordion-block__top -->

                      <div class="accordion-block__text">
                        We apply a systemic approach to business and its development. We are
                        constantle developming each of the systems and
                        subsystems of management.
                      </div>

                      <div class="accordion-block__top">
                        <div class="g-row">
                          <div class="g-col g-col_50">
                            <div class="text-grey-medium text-semibold">
                              Time
                            </div>
                          </div>
                          <div class="g-col g-col_50">
                            Time planing system
                          </div>
                        </div>
                      </div><!-- /accordion-block__top -->

                      <div class="accordion-block__text">
                        We apply a systemic approach to business and its development. We are
                        constantle developming each of the systems and
                        subsystems of management.
                      </div>

                      <div class="accordion-block__top">
                        <div class="g-row">
                          <div class="g-col g-col_50">
                            <div class="text-grey-medium text-semibold">
                              Cost
                            </div>
                          </div>
                          <div class="g-col g-col_50">
                            Cost planing system
                          </div>
                        </div>
                      </div><!-- /accordion-block__top -->

                      <div class="accordion-block__text">
                        We apply a systemic approach to business and its development. We are
                        constantle developming each of the systems and
                        subsystems of management.
                      </div>
                    </div><!-- /accordion-block -->
                  </div><!-- /accordion-inside-->

                  <div class="accordion js-accordion-inside">
                    <div
                      class="accordion-button accordion-button_dark js-accordion-button-inside"
                    >
                      <div class="accordion-button__text">
                        ORGANIZATION
                      </div>
                      <div class="accordion-button__icon" />
                    </div>

                    <div
                      class="accordion-block accordion-block_inside js-accordion-block-inside"
                    >
                      <div class="accordion-block__top">
                        <div class="g-row">
                          <div class="g-col g-col_50">
                            <div class="text-grey-medium text-semibold">
                              Quality
                            </div>
                          </div>
                          <div class="g-col g-col_50">
                            Quality planing system
                          </div>
                        </div>
                      </div><!-- /accordion-block__top -->

                      <div class="accordion-block__text">
                        We apply a systemic approach to business and its development. We are
                        constantle developming each of the systems and
                        subsystems of management.
                      </div>

                      <div class="accordion-block__top">
                        <div class="g-row">
                          <div class="g-col g-col_50">
                            <div class="text-grey-medium text-semibold">
                              Time
                            </div>
                          </div>
                          <div class="g-col g-col_50">
                            Time planing system
                          </div>
                        </div>
                      </div><!-- /accordion-block__top -->

                      <div class="accordion-block__text">
                        We apply a systemic approach to business and its development. We are
                        constantle developming each of the systems and
                        subsystems of management.
                      </div>

                      <div class="accordion-block__top">
                        <div class="g-row">
                          <div class="g-col g-col_50">
                            <div class="text-grey-medium text-semibold">
                              Cost
                            </div>
                          </div>
                          <div class="g-col g-col_50">
                            Cost planing system
                          </div>
                        </div>
                      </div><!-- /accordion-block__top -->

                      <div class="accordion-block__text">
                        We apply a systemic approach to business and its development. We are
                        constantle developming each of the systems and
                        subsystems of management.
                      </div>
                    </div><!-- /accordion-block -->
                  </div><!-- /accordion-inside-->

                  <div class="accordion js-accordion-inside">
                    <div
                      class="accordion-button accordion-button_dark js-accordion-button-inside"
                    >
                      <div class="accordion-button__text">
                        CONTROL
                      </div>
                      <div class="accordion-button__icon" />
                    </div>

                    <div
                      class="accordion-block accordion-block_inside js-accordion-block-inside"
                    >
                      <div class="accordion-block__top">
                        <div class="g-row">
                          <div class="g-col g-col_50">
                            <div class="text-grey-medium text-semibold">
                              Quality
                            </div>
                          </div>
                          <div class="g-col g-col_50">
                            Quality planing system
                          </div>
                        </div>
                      </div><!-- /accordion-block__top -->

                      <div class="accordion-block__text">
                        We apply a systemic approach to business and its development. We are
                        constantle developming each of the systems and
                        subsystems of management.
                      </div>

                      <div class="accordion-block__top">
                        <div class="g-row">
                          <div class="g-col g-col_50">
                            <div class="text-grey-medium text-semibold">
                              Time
                            </div>
                          </div>
                          <div class="g-col g-col_50">
                            Time planing system
                          </div>
                        </div>
                      </div><!-- /accordion-block__top -->

                      <div class="accordion-block__text">
                        We apply a systemic approach to business and its development. We are
                        constantle developming each of the systems and
                        subsystems of management.
                      </div>

                      <div class="accordion-block__top">
                        <div class="g-row">
                          <div class="g-col g-col_50">
                            <div class="text-grey-medium text-semibold">
                              Cost
                            </div>
                          </div>
                          <div class="g-col g-col_50">
                            Cost planing system
                          </div>
                        </div>
                      </div><!-- /accordion-block__top -->

                      <div class="accordion-block__text">
                        We apply a systemic approach to business and its development. We are
                        constantle developming each of the systems and
                        subsystems of management.
                      </div>
                    </div><!-- /accordion-block -->
                  </div><!-- /accordion-inside-->

                  <div class="accordion js-accordion-inside">
                    <div
                      class="accordion-button accordion-button_dark js-accordion-button-inside"
                    >
                      <div class="accordion-button__text">
                        eMPROVEMENT
                      </div>
                      <div class="accordion-button__icon" />
                    </div>

                    <div
                      class="accordion-block accordion-block_inside js-accordion-block-inside"
                    >
                      <div class="accordion-block__top">
                        <div class="g-row">
                          <div class="g-col g-col_50">
                            <div class="text-grey-medium text-semibold">
                              Quality
                            </div>
                          </div>
                          <div class="g-col g-col_50">
                            Quality planing system
                          </div>
                        </div>
                      </div><!-- /accordion-block__top -->

                      <div class="accordion-block__text">
                        We apply a systemic approach to business and its development. We are
                        constantle developming each of the systems and
                        subsystems of management.
                      </div>

                      <div class="accordion-block__top">
                        <div class="g-row">
                          <div class="g-col g-col_50">
                            <div class="text-grey-medium text-semibold">
                              Time
                            </div>
                          </div>
                          <div class="g-col g-col_50">
                            Time planing system
                          </div>
                        </div>
                      </div><!-- /accordion-block__top -->

                      <div class="accordion-block__text">
                        We apply a systemic approach to business and its development. We are
                        constantle developming each of the systems and
                        subsystems of management.
                      </div>

                      <div class="accordion-block__top">
                        <div class="g-row">
                          <div class="g-col g-col_50">
                            <div class="text-grey-medium text-semibold">
                              Cost
                            </div>
                          </div>
                          <div class="g-col g-col_50">
                            Cost planing system
                          </div>
                        </div>
                      </div><!-- /accordion-block__top -->

                      <div class="accordion-block__text">
                        We apply a systemic approach to business and its development. We are
                        constantle developming each of the systems and
                        subsystems of management.
                      </div>
                    </div><!-- /accordion-block -->
                  </div><!-- /accordion-inside-->
                </div>
              </div><!-- /accordion -->
            </div><!-- /system-data__item -->

            <div class="system-data__item">
              <div class="accordion js-accordion">
                <div class="accordion-button accordion-button_orange js-accordion-button">
                  <div class="accordion-button__text">
                    HR
                  </div>
                  <div class="accordion-button__icon" />
                </div>

                <div class="accordion-block js-accordion-block">
                  <div class="accordion js-accordion-inside">
                    <div
                      class="accordion-button accordion-button_dark js-accordion-button-inside"
                    >
                      <div class="accordion-button__text">
                        planning
                      </div>
                      <div class="accordion-button__icon" />
                    </div>

                    <div
                      class="accordion-block accordion-block_inside js-accordion-block-inside"
                    >
                      <div class="accordion-block__top">
                        <div class="g-row">
                          <div class="g-col g-col_50">
                            <div class="text-grey-medium text-semibold">
                              Quality
                            </div>
                          </div>
                          <div class="g-col g-col_50">
                            Quality planing system
                          </div>
                        </div>
                      </div><!-- /accordion-block__top -->

                      <div class="accordion-block__text">
                        We apply a systemic approach to business and its development. We are
                        constantle developming each of the systems and
                        subsystems of management.
                      </div>

                      <div class="accordion-block__top">
                        <div class="g-row">
                          <div class="g-col g-col_50">
                            <div class="text-grey-medium text-semibold">
                              Time
                            </div>
                          </div>
                          <div class="g-col g-col_50">
                            Time planing system
                          </div>
                        </div>
                      </div><!-- /accordion-block__top -->

                      <div class="accordion-block__text">
                        We apply a systemic approach to business and its development. We are
                        constantle developming each of the systems and
                        subsystems of management.
                      </div>

                      <div class="accordion-block__top">
                        <div class="g-row">
                          <div class="g-col g-col_50">
                            <div class="text-grey-medium text-semibold">
                              Cost
                            </div>
                          </div>
                          <div class="g-col g-col_50">
                            Cost planing system
                          </div>
                        </div>
                      </div><!-- /accordion-block__top -->

                      <div class="accordion-block__text">
                        We apply a systemic approach to business and its development. We are
                        constantle developming each of the systems and
                        subsystems of management.
                      </div>
                    </div><!-- /accordion-block -->
                  </div><!-- /accordion-inside-->

                  <div class="accordion js-accordion-inside">
                    <div
                      class="accordion-button accordion-button_dark js-accordion-button-inside"
                    >
                      <div class="accordion-button__text">
                        ORGANIZATION
                      </div>
                      <div class="accordion-button__icon" />
                    </div>

                    <div
                      class="accordion-block accordion-block_inside js-accordion-block-inside"
                    >
                      <div class="accordion-block__top">
                        <div class="g-row">
                          <div class="g-col g-col_50">
                            <div class="text-grey-medium text-semibold">
                              Quality
                            </div>
                          </div>
                          <div class="g-col g-col_50">
                            Quality planing system
                          </div>
                        </div>
                      </div><!-- /accordion-block__top -->

                      <div class="accordion-block__text">
                        We apply a systemic approach to business and its development. We are
                        constantle developming each of the systems and
                        subsystems of management.
                      </div>

                      <div class="accordion-block__top">
                        <div class="g-row">
                          <div class="g-col g-col_50">
                            <div class="text-grey-medium text-semibold">
                              Time
                            </div>
                          </div>
                          <div class="g-col g-col_50">
                            Time planing system
                          </div>
                        </div>
                      </div><!-- /accordion-block__top -->

                      <div class="accordion-block__text">
                        We apply a systemic approach to business and its development. We are
                        constantle developming each of the systems and
                        subsystems of management.
                      </div>

                      <div class="accordion-block__top">
                        <div class="g-row">
                          <div class="g-col g-col_50">
                            <div class="text-grey-medium text-semibold">
                              Cost
                            </div>
                          </div>
                          <div class="g-col g-col_50">
                            Cost planing system
                          </div>
                        </div>
                      </div><!-- /accordion-block__top -->

                      <div class="accordion-block__text">
                        We apply a systemic approach to business and its development. We are
                        constantle developming each of the systems and
                        subsystems of management.
                      </div>
                    </div><!-- /accordion-block -->
                  </div><!-- /accordion-inside-->

                  <div class="accordion js-accordion-inside">
                    <div
                      class="accordion-button accordion-button_dark js-accordion-button-inside"
                    >
                      <div class="accordion-button__text">
                        CONTROL
                      </div>
                      <div class="accordion-button__icon" />
                    </div>

                    <div
                      class="accordion-block accordion-block_inside js-accordion-block-inside"
                    >
                      <div class="accordion-block__top">
                        <div class="g-row">
                          <div class="g-col g-col_50">
                            <div class="text-grey-medium text-semibold">
                              Quality
                            </div>
                          </div>
                          <div class="g-col g-col_50">
                            Quality planing system
                          </div>
                        </div>
                      </div><!-- /accordion-block__top -->

                      <div class="accordion-block__text">
                        We apply a systemic approach to business and its development. We are
                        constantle developming each of the systems and
                        subsystems of management.
                      </div>

                      <div class="accordion-block__top">
                        <div class="g-row">
                          <div class="g-col g-col_50">
                            <div class="text-grey-medium text-semibold">
                              Time
                            </div>
                          </div>
                          <div class="g-col g-col_50">
                            Time planing system
                          </div>
                        </div>
                      </div><!-- /accordion-block__top -->

                      <div class="accordion-block__text">
                        We apply a systemic approach to business and its development. We are
                        constantle developming each of the systems and
                        subsystems of management.
                      </div>

                      <div class="accordion-block__top">
                        <div class="g-row">
                          <div class="g-col g-col_50">
                            <div class="text-grey-medium text-semibold">
                              Cost
                            </div>
                          </div>
                          <div class="g-col g-col_50">
                            Cost planing system
                          </div>
                        </div>
                      </div><!-- /accordion-block__top -->

                      <div class="accordion-block__text">
                        We apply a systemic approach to business and its development. We are
                        constantle developming each of the systems and
                        subsystems of management.
                      </div>
                    </div><!-- /accordion-block -->
                  </div><!-- /accordion-inside-->

                  <div class="accordion js-accordion-inside">
                    <div
                      class="accordion-button accordion-button_dark js-accordion-button-inside"
                    >
                      <div class="accordion-button__text">
                        eMPROVEMENT
                      </div>
                      <div class="accordion-button__icon" />
                    </div>

                    <div
                      class="accordion-block accordion-block_inside js-accordion-block-inside"
                    >
                      <div class="accordion-block__top">
                        <div class="g-row">
                          <div class="g-col g-col_50">
                            <div class="text-grey-medium text-semibold">
                              Quality
                            </div>
                          </div>
                          <div class="g-col g-col_50">
                            Quality planing system
                          </div>
                        </div>
                      </div><!-- /accordion-block__top -->

                      <div class="accordion-block__text">
                        We apply a systemic approach to business and its development. We are
                        constantle developming each of the systems and
                        subsystems of management.
                      </div>

                      <div class="accordion-block__top">
                        <div class="g-row">
                          <div class="g-col g-col_50">
                            <div class="text-grey-medium text-semibold">
                              Time
                            </div>
                          </div>
                          <div class="g-col g-col_50">
                            Time planing system
                          </div>
                        </div>
                      </div><!-- /accordion-block__top -->

                      <div class="accordion-block__text">
                        We apply a systemic approach to business and its development. We are
                        constantle developming each of the systems and
                        subsystems of management.
                      </div>

                      <div class="accordion-block__top">
                        <div class="g-row">
                          <div class="g-col g-col_50">
                            <div class="text-grey-medium text-semibold">
                              Cost
                            </div>
                          </div>
                          <div class="g-col g-col_50">
                            Cost planing system
                          </div>
                        </div>
                      </div><!-- /accordion-block__top -->

                      <div class="accordion-block__text">
                        We apply a systemic approach to business and its development. We are
                        constantle developming each of the systems and
                        subsystems of management.
                      </div>
                    </div><!-- /accordion-block -->
                  </div><!-- /accordion-inside-->
                </div>
              </div><!-- /accordion -->
            </div><!-- /system-data__item -->

            <div class="system-data__item">
              <div class="accordion js-accordion">
                <div class="accordion-button accordion-button_light-blue js-accordion-button">
                  <div class="accordion-button__text">
                    R&D
                  </div>
                  <div class="accordion-button__icon" />
                </div>

                <div class="accordion-block js-accordion-block">
                  <div class="accordion js-accordion-inside">
                    <div
                      class="accordion-button accordion-button_dark js-accordion-button-inside"
                    >
                      <div class="accordion-button__text">
                        planning
                      </div>
                      <div class="accordion-button__icon" />
                    </div>

                    <div
                      class="accordion-block accordion-block_inside js-accordion-block-inside"
                    >
                      <div class="accordion-block__top">
                        <div class="g-row">
                          <div class="g-col g-col_50">
                            <div class="text-grey-medium text-semibold">
                              Quality
                            </div>
                          </div>
                          <div class="g-col g-col_50">
                            Quality planing system
                          </div>
                        </div>
                      </div><!-- /accordion-block__top -->

                      <div class="accordion-block__text">
                        We apply a systemic approach to business and its development. We are
                        constantle developming each of the systems and
                        subsystems of management.
                      </div>

                      <div class="accordion-block__top">
                        <div class="g-row">
                          <div class="g-col g-col_50">
                            <div class="text-grey-medium text-semibold">
                              Time
                            </div>
                          </div>
                          <div class="g-col g-col_50">
                            Time planing system
                          </div>
                        </div>
                      </div><!-- /accordion-block__top -->

                      <div class="accordion-block__text">
                        We apply a systemic approach to business and its development. We are
                        constantle developming each of the systems and
                        subsystems of management.
                      </div>

                      <div class="accordion-block__top">
                        <div class="g-row">
                          <div class="g-col g-col_50">
                            <div class="text-grey-medium text-semibold">
                              Cost
                            </div>
                          </div>
                          <div class="g-col g-col_50">
                            Cost planing system
                          </div>
                        </div>
                      </div><!-- /accordion-block__top -->

                      <div class="accordion-block__text">
                        We apply a systemic approach to business and its development. We are
                        constantle developming each of the systems and
                        subsystems of management.
                      </div>
                    </div><!-- /accordion-block -->
                  </div><!-- /accordion-inside-->

                  <div class="accordion js-accordion-inside">
                    <div
                      class="accordion-button accordion-button_dark js-accordion-button-inside"
                    >
                      <div class="accordion-button__text">
                        ORGANIZATION
                      </div>
                      <div class="accordion-button__icon" />
                    </div>

                    <div
                      class="accordion-block accordion-block_inside js-accordion-block-inside"
                    >
                      <div class="accordion-block__top">
                        <div class="g-row">
                          <div class="g-col g-col_50">
                            <div class="text-grey-medium text-semibold">
                              Quality
                            </div>
                          </div>
                          <div class="g-col g-col_50">
                            Quality planing system
                          </div>
                        </div>
                      </div><!-- /accordion-block__top -->

                      <div class="accordion-block__text">
                        We apply a systemic approach to business and its development. We are
                        constantle developming each of the systems and
                        subsystems of management.
                      </div>

                      <div class="accordion-block__top">
                        <div class="g-row">
                          <div class="g-col g-col_50">
                            <div class="text-grey-medium text-semibold">
                              Time
                            </div>
                          </div>
                          <div class="g-col g-col_50">
                            Time planing system
                          </div>
                        </div>
                      </div><!-- /accordion-block__top -->

                      <div class="accordion-block__text">
                        We apply a systemic approach to business and its development. We are
                        constantle developming each of the systems and
                        subsystems of management.
                      </div>

                      <div class="accordion-block__top">
                        <div class="g-row">
                          <div class="g-col g-col_50">
                            <div class="text-grey-medium text-semibold">
                              Cost
                            </div>
                          </div>
                          <div class="g-col g-col_50">
                            Cost planing system
                          </div>
                        </div>
                      </div><!-- /accordion-block__top -->

                      <div class="accordion-block__text">
                        We apply a systemic approach to business and its development. We are
                        constantle developming each of the systems and
                        subsystems of management.
                      </div>
                    </div><!-- /accordion-block -->
                  </div><!-- /accordion-inside-->

                  <div class="accordion js-accordion-inside">
                    <div
                      class="accordion-button accordion-button_dark js-accordion-button-inside"
                    >
                      <div class="accordion-button__text">
                        CONTROL
                      </div>
                      <div class="accordion-button__icon" />
                    </div>

                    <div
                      class="accordion-block accordion-block_inside js-accordion-block-inside"
                    >
                      <div class="accordion-block__top">
                        <div class="g-row">
                          <div class="g-col g-col_50">
                            <div class="text-grey-medium text-semibold">
                              Quality
                            </div>
                          </div>
                          <div class="g-col g-col_50">
                            Quality planing system
                          </div>
                        </div>
                      </div><!-- /accordion-block__top -->

                      <div class="accordion-block__text">
                        We apply a systemic approach to business and its development. We are
                        constantle developming each of the systems and
                        subsystems of management.
                      </div>

                      <div class="accordion-block__top">
                        <div class="g-row">
                          <div class="g-col g-col_50">
                            <div class="text-grey-medium text-semibold">
                              Time
                            </div>
                          </div>
                          <div class="g-col g-col_50">
                            Time planing system
                          </div>
                        </div>
                      </div><!-- /accordion-block__top -->

                      <div class="accordion-block__text">
                        We apply a systemic approach to business and its development. We are
                        constantle developming each of the systems and
                        subsystems of management.
                      </div>

                      <div class="accordion-block__top">
                        <div class="g-row">
                          <div class="g-col g-col_50">
                            <div class="text-grey-medium text-semibold">
                              Cost
                            </div>
                          </div>
                          <div class="g-col g-col_50">
                            Cost planing system
                          </div>
                        </div>
                      </div><!-- /accordion-block__top -->

                      <div class="accordion-block__text">
                        We apply a systemic approach to business and its development. We are
                        constantle developming each of the systems and
                        subsystems of management.
                      </div>
                    </div><!-- /accordion-block -->
                  </div><!-- /accordion-inside-->

                  <div class="accordion js-accordion-inside">
                    <div
                      class="accordion-button accordion-button_dark js-accordion-button-inside"
                    >
                      <div class="accordion-button__text">
                        eMPROVEMENT
                      </div>
                      <div class="accordion-button__icon" />
                    </div>

                    <div
                      class="accordion-block accordion-block_inside js-accordion-block-inside"
                    >
                      <div class="accordion-block__top">
                        <div class="g-row">
                          <div class="g-col g-col_50">
                            <div class="text-grey-medium text-semibold">
                              Quality
                            </div>
                          </div>
                          <div class="g-col g-col_50">
                            Quality planing system
                          </div>
                        </div>
                      </div><!-- /accordion-block__top -->

                      <div class="accordion-block__text">
                        We apply a systemic approach to business and its development. We are
                        constantle developming each of the systems and
                        subsystems of management.
                      </div>

                      <div class="accordion-block__top">
                        <div class="g-row">
                          <div class="g-col g-col_50">
                            <div class="text-grey-medium text-semibold">
                              Time
                            </div>
                          </div>
                          <div class="g-col g-col_50">
                            Time planing system
                          </div>
                        </div>
                      </div><!-- /accordion-block__top -->

                      <div class="accordion-block__text">
                        We apply a systemic approach to business and its development. We are
                        constantle developming each of the systems and
                        subsystems of management.
                      </div>

                      <div class="accordion-block__top">
                        <div class="g-row">
                          <div class="g-col g-col_50">
                            <div class="text-grey-medium text-semibold">
                              Cost
                            </div>
                          </div>
                          <div class="g-col g-col_50">
                            Cost planing system
                          </div>
                        </div>
                      </div><!-- /accordion-block__top -->

                      <div class="accordion-block__text">
                        We apply a systemic approach to business and its development. We are
                        constantle developming each of the systems and
                        subsystems of management.
                      </div>
                    </div><!-- /accordion-block -->
                  </div><!-- /accordion-inside-->
                </div>
              </div><!-- /accordion -->
            </div><!-- /system-data__item -->
          </div>
          <!-- /system-data__accordion -->
        </div>
      </div> <!-- /container -->
    </section>
    <Map />
  </main>
</template>

<script>
export default {
  head () {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }]
    }
  },
  computed: {
    styleObject () {
      return {
        web: {
          backgroundImage: `url(${require('~/assets/img/content/project1.jpg')})`
        },
        '3d': {
          backgroundImage: `url(${require('~/assets/img/content/project2.jpg')})`
        },
        analysis: {
          backgroundImage: `url(${require('~/assets/img/content/project3.jpg')})`
        },
        crm: {
          backgroundImage: `url(${require('~/assets/img/content/project1.jpg')})`
        }
      }
    }
  },
  mounted () {
    // слайдеры технологии
    if ($('.js-technologies-slider').length > 0) {
      // eslint-disable-next-line
      new Swiper('.js-technologies-slider', {
        spaceBetween: 60,
        speed: 6000,
        slidesPerView: 'auto',
        watchSlidesVisibility: true,
        loop: true,
        loopFillGroupWithBlank: true,
        autoplay: {
          delay: 1,
          disableOnInteraction: false
        },
        breakpoints: {
          // when window width is >= 1024px
          1024: {
            autoplay: false
          }
        }
      })

      window.onwheel = function (e) {
        const animateSlider1 = document.querySelector('.js-animate-slider1').swiper
        const animateSlider2 = document.querySelector('.js-animate-slider2').swiper
        const animateSlider3 = document.querySelector('.js-animate-slider3').swiper
        const val = e.deltaY
        if (val > 0) {
          animateSlider1.slideNext(600)
          animateSlider2.slideNext(600)
          animateSlider3.slideNext(600)
        } else {
          animateSlider1.slidePrev(600)
          animateSlider2.slidePrev(600)
          animateSlider3.slidePrev(600)
        }
      }
    }
    // слайдер команда
    // eslint-disable-next-line
    new Swiper('.js-team-slider', {
      spaceBetween: 14,
      slidesPerView: 'auto',
      breakpoints: {
        // when window width is >= 768px
        768: {
          spaceBetween: 20,
          slidesPerView: 3
        },

        // when window width is >= 992px
        992: {
          slidesPerView: 3,
          spaceBetween: 30
        }
      }
    })

    // aнимация чисел
    if ($('.js-animate-block').length > 0) {
      let showNumbers = null

      function animateNumber () {
        const wt = $(window).scrollTop()
        const wh = $(window).height()
        const et = $('.js-animate-block').offset().top
        const eh = $('.js-animate-block').outerHeight()

        if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)) {
          if (showNumbers === null || showNumbers === false) {
            $('.js-animate-number').each(function () {
              $(this).prop('Counter', 0).animate({
                Counter: $(this).attr('data-number')
              }, {
                duration: 1000,
                easing: 'swing',
                step (now) {
                  $(this).text(Math.ceil(now))
                }
              })
            })
            setTimeout(() => {
              $('.js-animate-text').fadeIn()
            }, 1000)
          }
          showNumbers = true
        }
      }

      animateNumber()
      $(window).scroll(() => {
        animateNumber()
      })
    }

    // анимация белого фона
    if ($('.js-technologies').length > 0) {
      let showTechnologies = null

      function animateTechnologies () {
        const wt = $(window).scrollTop()
        const wh = $(window).height() / 2
        const et = $('.js-technologies').offset().top
        const eh = $('.js-technologies').outerHeight()

        if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)) {
          if (showTechnologies === null || showTechnologies === false) {
            $('.js-technologies').removeClass('is-start')
          }
          showTechnologies = true
        }
      }
      animateTechnologies()
      $(window).scroll(() => {
        animateTechnologies()
      })
    }
    $('.js-accordion-button').on('click', function () {
      const $this = $(this)
      $this.toggleClass('is-active')
      $this.closest('.js-accordion').find('.js-accordion-block').slideToggle()
    })

    $('.js-accordion-button-inside').on('click', function () {
      const $this = $(this)
      $this.toggleClass('is-active')
      $this.closest('.js-accordion-inside').find('.js-accordion-block-inside').slideToggle()
    })
  }
}
</script>
