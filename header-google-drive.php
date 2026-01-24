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
                    <a class="cc-logo flex-center" href="https://codeconfig.dev/" aria-label="<?php echo esc_attr__('CodeConfig Home', 'demo-codeconfig'); ?>">
                        <img src="<?php echo GET_THEME_URI; ?>/assets/images/google-drive/codeconfig-mini-logo.svg" alt="CodeConfig" width="40" height="40">
                    </a>
                    <span class="logo-divider" aria-hidden="true"></span>
                    <!-- Google Drive Integration Logo -->
                    <a class="ccp-google-drive-logo d-flex align-center margin-0" href="https://codeconfig.dev/integration-google-drive/" aria-label="<?php echo esc_attr__('Integration for Google Drive', 'demo-codeconfig'); ?>">
                        <img src="<?php echo GET_THEME_URI; ?>/assets/images/google-drive/integration_for_google_drive.svg" alt="Integration for Google Drive" width="50" height="50">
                        <div class="logo-label d-flex flex-col align-start hide-mobile">
                            <span><?php echo esc_html__('INTEGRATION FOR', 'demo-codeconfig'); ?></span>
                            <h6><?php echo esc_html__('GOOGLE DRIVE', 'demo-codeconfig'); ?></h6>
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
                    <div class="logos d-flex align-center justify-start">
                        <a class="cc-logo flex-center" href="#" aria-label="CodeConfig Home">
                            <img src="<?php echo GET_THEME_URI; ?>/assets/images/google-drive/codeconfig-mini-logo.svg" alt="CodeConfig" width="40" height="40">
                        </a>
                        <span class="logo-divider" aria-hidden="true"></span>
                        <a class="ccp-google-drive-logo d-flex align-center margin-0" href="#" aria-label="Integration for Google Drive">
                            <img src="<?php echo GET_THEME_URI; ?>/assets/images/google-drive/integration_for_google_drive.svg" alt="Integration for Google Drive" width="50" height="50">
                            <div class="logo-label d-flex flex-col align-start hide-mobile">
                                <span><?php echo esc_html__('INTEGRATION FOR', 'demo-codeconfig'); ?></span>
                                <h6><?php echo esc_html__('GOOGLE DRIVE', 'demo-codeconfig'); ?></h6>
                            </div>
                        </a>
                    </div>

                    <!-- Mobile Menu Close Button -->
                    <button class="hamburger-menu flex-center flex-col ccp-mobile-menu-close relative cursor-pointer" type="button" aria-label="Close menu" aria-expanded="true">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </button>
                </div><!-- /.mobile-menu-header -->

                <?php
                if (has_nav_menu('google-drive-menu')) {
                    wp_nav_menu(array(
                        'theme_location' => 'google-drive-menu',
                        'menu_id'        => 'cc-google-drive-main-menu',
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