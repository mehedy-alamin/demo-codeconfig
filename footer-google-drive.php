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

                        <span class="logo-divider"></span>

                        <a class="ccp-google-drive-logo d-flex align-center margin-0" href="https://codeconfig.dev/integration-google-drive/" aria-label="<?php echo esc_attr__('Integration for Google Drive', 'demo-codeconfig'); ?>">
                            <img src="<?php echo esc_url(GET_THEME_URI . '/assets/images/google-drive/integration_for_google_drive.svg'); ?>" alt="<?php echo esc_attr__('Integration for Google Drive', 'demo-codeconfig'); ?>">
                            <div class="logo-label d-flex flex-col align-start">
                                <span><?php echo esc_html__('INTEGRATION FOR', 'demo-codeconfig'); ?></span>
                                <h6><?php echo esc_html__('GOOGLE DRIVE', 'demo-codeconfig'); ?></h6>
                            </div>
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
                        if (has_nav_menu('igd-resources')) {
                            wp_nav_menu(array(
                                'theme_location' => 'igd-resources',
                                'menu_id'        => 'igd-resources-menu',
                                'menu_class'     => 'igd-resources-menu',
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
                        if (has_nav_menu('igd-help-center')) {
                            wp_nav_menu(array(
                                'theme_location' => 'igd-help-center',
                                'menu_id'        => 'igd-help-center-menu',
                                'menu_class'     => 'igd-help-center-menu',
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

<!-- Free Download Popup start-->
<?php
$global_drop_box = get_field('google_drive_area', 'option');
$download_popup_box = $global_drop_box['download_popup'];
$ccp_free_download_link = $download_popup_box['ccp_free_download'];

if (!empty($ccp_free_download_link)):

    $ccp_free_download_link_url = $ccp_free_download_link['url'];
    $free_download_form = $download_popup_box['form_id'] ?? '';
?>
    <section class="ccpigd-section ccp-download-popup-section ccpigd-download-popup-section flex-center transition"
        role="dialog"
        aria-modal="true"
        aria-labelledby="download-popup-title"
        aria-hidden="true">
        <div class="ccp-download-popup relative">
            <button class="d-flex align-center absolute ccp-popup-close-btn ccp-popup-close"
                type="button"
                aria-label="<?php echo esc_attr__('Close popup', 'codeconfig'); ?>">
            </button>

            <div class="text-center ccp-download-popup-content relative">
                <?php
                ?>
                <h3 id="download-popup-title"><?php echo esc_html($download_popup_box['title'] ?? ''); ?></h3>
                <p><?php echo esc_html($download_popup_box['description'] ?? ''); ?></p>
                <a class="visually-hidden" id="ccp-free-download-link-url" href="<?php echo esc_url($ccp_free_download_link_url); ?>">Demo</a>

                <div class="free-downolad-form flex-center">
                    <?php if (!empty($free_download_form)): ?>
                        <?php echo do_shortcode($free_download_form); ?>
                    <?php elseif (!empty($ccp_free_download_link_url)): ?>
                        <a href="<?php echo esc_url($ccp_free_download_link_url, array('http', 'https')); ?>"
                            class="ccpigd-btn primary icon icon-wordpress field-btn ccp-popup-close-btn"
                            <?php if (($ccp_free_download_link['target'] ?? '_self') === '_blank'): ?>
                            target="_blank" rel="noopener noreferrer"
                            <?php endif; ?>>
                            <?php echo esc_html($ccp_free_download_link['title'] ?? __('Download Free', 'codeconfig')); ?>
                        </a>
                    <?php else: ?>
                        <?php if (current_user_can('manage_options')): ?>
                            <p class="text-center" style="color: #e1f2a6;">
                                <?php echo esc_html__('Please set download link or form in theme options.', 'codeconfig'); ?>
                            </p>
                        <?php endif; ?>
                    <?php endif; ?>
                </div>
            </div>
        </div>
    </section>
<?php endif; ?>
<!-- Free Download Popup end-->

<?php wp_footer(); ?>
</body>

</html>