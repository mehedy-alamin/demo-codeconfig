<!-- Footer -->
<footer class="cc-footer ccpigd-footer">
    <div class="footer-bottom relative">
        <div class="container relative">
            <div class="d-flex space-between flex-wrap">
                <!-- Left Side -->
                <div class="left-side">
                    <div class="logos d-flex align-center">
                        <a class="cc-logo flex-center" href="https://codeconfig.dev/" aria-label="<?php echo esc_attr__('CodeConfig Home', 'demo-codeconfig'); ?>">
                            <img src="<?php echo esc_url(GET_THEME_URI . '/assets/images/google-drive/codeconfig-mini-logo.svg'); ?>" alt="<?php echo esc_attr__('CodeConfig', 'demo-codeconfig'); ?>">
                        </a>
                    </div><!-- /.logos -->

                    <div class="footer-description d-flex flex-col hide-tab hide-mobile">
                        <div class="description">
                            <p>
                                <?php echo esc_html__('No coding, setup or account necessary. Integration for Google Drive is the best WordPress plugin and offers a stable and clean solution for your website.', 'demo-codeconfig'); ?>
                            </p>
                        </div>
                        <div class="ratting-status d-flex" role="img" aria-label="<?php echo esc_attr__('5 out of 5 stars rating', 'demo-codeconfig'); ?>">
                            <span class="relative d-flex align-center"><?php echo esc_html__('5 out of 5 stars.', 'demo-codeconfig'); ?></span>
                        </div>
                    </div>

                    <!-- Products Menu (Mobile/Tablet) -->
                    <nav class="footer-menu products cc-products-menu footer-menu-tab-mobile" aria-label="<?php echo esc_attr__('Products navigation', 'demo-codeconfig'); ?>">
                        <h2><?php echo esc_html__('Products', 'demo-codeconfig'); ?></h2>
                        <?php
                        if (has_nav_menu('products-menu')) {
                            wp_nav_menu(array(
                                'theme_location' => 'products-menu',
                                'menu_id'        => 'cc-products-menu',
                                'menu_class'     => 'cc-products-menu',
                                'container'      => false,
                                'fallback_cb'    => false,
                                'depth'          => 2,
                                'walker'         => null,
                            ));
                        }
                        ?>
                    </nav>
                </div><!-- /.left-side -->

                <!-- Right Side -->
                <div class="right-side d-flex space-between">
                    <!-- Resources Menu -->
                    <nav class="footer-menu resources" aria-label="<?php echo esc_attr__('Resources navigation', 'demo-codeconfig'); ?>">
                        <h2><?php echo esc_html__('Resources', 'demo-codeconfig'); ?></h2>
                        <?php
                        if (has_nav_menu('company-menu')) {
                            wp_nav_menu(array(
                                'theme_location' => 'company-menu',
                                'menu_id'        => 'company-menu',
                                'menu_class'     => 'company-menu',
                                'container'      => false,
                                'fallback_cb'    => false,
                                'depth'          => 2,
                                'walker'         => null,
                            ));
                        }
                        ?>
                    </nav>

                    <!-- Company Menu -->
                    <nav class="footer-menu company" aria-label="<?php echo esc_attr__('Company navigation', 'demo-codeconfig'); ?>">
                        <h2><?php echo esc_html__('Help Center', 'demo-codeconfig'); ?></h2>
                        <?php
                        if (has_nav_menu('resources-menu')) {
                            wp_nav_menu(array(
                                'theme_location' => 'resources-menu',
                                'menu_id'        => 'resources-menu',
                                'menu_class'     => 'resources-menu',
                                'container'      => false,
                                'fallback_cb'    => false,
                                'depth'          => 2,
                                'walker'         => null,
                            ));
                        }
                        ?>
                    </nav>

                    <!-- Products Menu (Desktop) -->
                    <nav class="footer-menu products cc-products-menu footer-menu-desk" aria-label="<?php echo esc_attr__('Products navigation', 'demo-codeconfig'); ?>">
                        <h2><?php echo esc_html__('Products', 'demo-codeconfig'); ?></h2>
                        <?php
                        if (has_nav_menu('products-menu')) {
                            wp_nav_menu(array(
                                'theme_location' => 'products-menu',
                                'menu_id'        => 'cc-products-menu',
                                'menu_class'     => 'cc-products-menu',
                                'container'      => false,
                                'fallback_cb'    => false,
                                'depth'          => 2,
                                'walker'         => null,
                            ));
                        }
                        ?>
                    </nav>

                    <!-- Footer Description (Mobile/Tablet) -->
                    <div class="footer-description d-flex flex-col hide-desktop">
                        <div class="description">
                            <p>
                                <?php echo esc_html__('No coding, setup or account necessary. Integration for Google Drive is the best WordPress plugin and offers a stable and clean solution for your website.', 'demo-codeconfig'); ?>
                            </p>
                        </div>
                        <div class="ratting-status d-flex" role="img" aria-label="<?php echo esc_attr__('5 out of 5 stars rating', 'demo-codeconfig'); ?>">
                            <span class="relative d-flex align-center"><?php echo esc_html__('5 out of 5 stars.', 'demo-codeconfig'); ?></span>
                        </div>
                    </div>
                </div><!-- /.right-side -->
            </div>
        </div><!-- /.container -->
    </div><!-- /.footer-bottom -->

    <!-- Copyright Section -->
    <div class="copyright">
        <div class="container relative">
            <button class="cc-scroll-top-btn flex-center transition" type="button" aria-label="<?php echo esc_attr__('Scroll to top', 'demo-codeconfig'); ?>">
                <span class="scroll-top-btn-icon transition" aria-hidden="true"></span>
            </button>

            <div class="copyright-payment d-flex align-center space-between">
                <p>
                    <?php
                    printf(
                        /* translators: %s: CodeConfig link */
                        esc_html__('© 2023-2025 %s. All Rights Reserved.', 'demo-codeconfig'),
                        '<a href="' . esc_url('https://codeconfig.dev/') . '">' . esc_html__('CodeConfig', 'demo-codeconfig') . '</a>'
                    );
                    ?>
                </p>

                <!-- Payment Methods -->
                <div class="payment-method d-flex align-center">
                    <p><?php echo esc_html__('Secure Payment:', 'demo-codeconfig'); ?></p>
                    <ul class="unstyle d-flex align-center" role="list">
                        <?php
                        $payment_methods = array(
                            'paypal' => __('PayPal', 'demo-codeconfig'),
                            'visa' => __('Visa', 'demo-codeconfig'),
                            'mastercard' => __('Mastercard', 'demo-codeconfig'),
                            'amex' => __('American Express', 'demo-codeconfig'),
                            'discover' => __('Discover', 'demo-codeconfig'),
                        );

                        foreach ($payment_methods as $method => $label) {
                        ?>
                            <li>
                                <img src="<?php echo esc_url(GET_THEME_URI . '/assets/images/' . $method . '.svg'); ?>" alt="<?php echo esc_attr($label); ?>">
                            </li>
                        <?php
                        }
                        ?>
                    </ul>
                </div><!-- /.payment-method -->
            </div><!-- /.copyright-payment -->
        </div><!-- /.container -->
    </div><!-- /.copyright -->
</footer>
<!-- Footer End -->

<?php wp_footer(); ?>
</body>

</html>