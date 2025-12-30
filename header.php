<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Demo CodeConfig - Google Drive single feature</title>
    <meta
        name="description"
        content="Frontend development with Gulp workflow" />
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
    <!-- Header Start -->
    <header id="cc-header" class="cc-google-drive-header sticky-hero">
        <div class="ccpigd-container">
            <div class="cc-google-drive-main-header d-flex align-center space-between transition ccp-main-header">
                <div class="logo-site d-flex align-center space-between">
                    <div class="logos d-flex align-center justify-start">
                        <!-- CodeConfig Logo -->
                        <a class="cc-logo flex-center" href="<?php echo esc_url(home_url('/')); ?>" aria-label="CodeConfig Home">
                            <img src="<?php echo get_template_directory_uri(); ?>/assets/images/google-drive/codeconfig-mini-logo.svg" alt="CodeConfig" width="40" height="40">
                        </a>
                        <span class="logo-divider" aria-hidden="true"></span>
                        <!-- Google Drive Integration Logo -->
                        <a class="ccp-google-drive-logo d-flex align-center margin-0" href="<?php echo esc_url(home_url('/')); ?>" aria-label="Integration for Google Drive">
                            <img src="<?php echo get_template_directory_uri(); ?>/assets/images/google-drive/integration_for_google_drive.svg" alt="Integration for Google Drive" width="50" height="50">
                            <div class="logo-label d-flex flex-col align-start hide-mobile">
                                <span>INTEGRATION FOR</span>
                                <h6>GOOGLE DRIVE</h6>
                            </div>
                        </a>
                    </div><!-- /.logos -->

                    <!-- Mobile Menu Toggle -->
                    <button class="hamburger-menu flex-center flex-col ccp-mobile-menu-open cursor-pointer relative hide-desktop" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-navigation">
                        <span class="transition" aria-hidden="true"></span>
                        <span class="transition" aria-hidden="true"></span>
                        <span class="transition" aria-hidden="true"></span>
                    </button>
                </div><!-- /.logo-site -->

                <!-- Navigation Menu -->
                <nav class="menu-site transition" id="mobile-navigation" aria-label="Main navigation">
                    <div class="mobile-menu-header logos d-flex align-center space-between hide-desktop">
                        <!-- Mobile Logo -->
                        <a class="ccp-google-drive-logo d-flex align-center margin-0" href="<?php echo esc_url(home_url('/')); ?>" aria-label="Integration for Google Drive">
                            <img src="<?php echo get_template_directory_uri(); ?>/assets/images/google-drive/integration_for_google_drive.svg" alt="Integration for Google Drive" width="50" height="50">
                            <div class="logo-label d-flex flex-col align-start hide-mobile">
                                <span>INTEGRATION FOR</span>
                                <h6>GOOGLE DRIVE</h6>
                            </div>
                        </a>

                        <!-- Mobile Menu Close Button -->
                        <button class="hamburger-menu flex-center flex-col ccp-mobile-menu-close relative cursor-pointer" type="button" aria-label="Close menu" aria-expanded="true">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </button>
                    </div><!-- /.mobile-menu-header -->

                    <?php
                    wp_nav_menu(array(
                        'theme_location' => 'google-drive-menu',
                        'menu_id'        => 'menu-integration-google-drive',
                        'menu_class'     => 'main-header-menu',
                        'container'      => false,
                        'fallback_cb'    => false,
                    ));
                    ?>
                </nav><!-- /.menu-site -->
            </div><!-- /.cc-google-drive-main-header -->
        </div><!-- /.ccpigd-container -->
    </header>
    <!-- Header End -->

    <?php wp_footer(); ?>
</body>

</html>