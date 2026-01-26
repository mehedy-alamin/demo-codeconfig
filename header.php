<?php
get_template_part('template-part/head');
?>
<!-- Header Start -->
<header id="cc-header" class="cc-google-drive-header sticky-hero" role="banner">
    <div class="ccpigd-container">
        <div class="cc-google-drive-main-header d-flex align-center space-between transition ccp-main-header">
            <div class="logo-site d-flex align-center space-between">
                <div class="logos d-flex align-center justify-start">
                    <!-- CodeConfig Logo -->
                    <a class="cc-logo flex-center" href="https://codeconfig.dev/" aria-label="CodeConfig Home">
                        <img src="<?php echo GET_THEME_URI; ?>/assets/images/google-drive/codeconfig-mini-logo.svg" alt="CodeConfig" width="40" height="40">
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
                    <div class="logos d-flex align-center justify-start">
                        <a class="cc-logo flex-center" href="https://codeconfig.dev/" aria-label="CodeConfig Home">
                            <img src="<?php echo GET_THEME_URI; ?>/assets/images/google-drive/codeconfig-mini-logo.svg" alt="CodeConfig" width="40" height="40">
                        </a>
                    </div>

                    <!-- Mobile Menu Close Button -->
                    <button class="hamburger-menu flex-center flex-col ccp-mobile-menu-close relative cursor-pointer" type="button" aria-label="Close menu" aria-expanded="true">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </button>
                </div><!-- /.mobile-menu-header -->

                <?php
                if (has_nav_menu('primary-menu')) {
                    wp_nav_menu(array(
                        'theme_location' => 'primary-menu',
                        'menu_id'        => 'cc-primary-main-menu',
                        'menu_class'     => 'main-header-menu',
                        'container'      => false,
                        'fallback_cb'    => false,
                        'depth'          => 2,
                        'walker'         => null, // Use custom walker if needed for additional security
                    ));
                }
                ?>
            </nav><!-- /.menu-site -->
        </div><!-- /.cc-google-drive-main-header -->
    </div><!-- /.ccpigd-container -->
</header>
<!-- Header End -->