<!-- Footer Call to Action Section -->
<?php
// Validate ACF is active and field exists
if (function_exists('get_field')) {
    $footer_cta = get_field('footer_cta', 'option');
    $cc_footer_cta = is_array($footer_cta) && isset($footer_cta['cc_footer_cta'])
        ? $footer_cta['cc_footer_cta']
        : array();

    // Sanitize all fields
    $cta_title = !empty($cc_footer_cta['title']) ? sanitize_text_field($cc_footer_cta['title']) : '';
    $cta_description = !empty($cc_footer_cta['description']) ? sanitize_textarea_field($cc_footer_cta['description']) : '';

    // Pro button data
    $pro_button = !empty($cc_footer_cta['cta_pro_button']) ? $cc_footer_cta['cta_pro_button'] : array();
    $pro_button_url = !empty($pro_button['url']) ? esc_url_raw($pro_button['url'], array('http', 'https')) : '';
    $pro_button_title = !empty($pro_button['title']) ? sanitize_text_field($pro_button['title']) : '';
    $pro_button_target = !empty($pro_button['target']) ? sanitize_text_field($pro_button['target']) : '_self';

    // Validate target attribute - only allow _self or _blank
    $allowed_targets = array('_self', '_blank');
    if (!in_array($pro_button_target, $allowed_targets, true)) {
        $pro_button_target = '_self';
    }

    // Only show section if title exists
    if (!empty($cta_title)):
?>
        <section class="ccpigd-section ccpigd-footer-cta relative">
            <div class="ccpigd-container">
                <div class="ccpigd-footer-cta-wrapper text-center relative overflow-hidden">
                    <div class="section-title-box text-center">
                        <h3><?php echo esc_html($cta_title); ?></h3>
                        <?php if (!empty($cta_description)): ?>
                            <p><?php echo esc_html($cta_description); ?></p>
                        <?php endif; ?>
                    </div>

                    <div class="ccpigd-btn-group">
                        <!-- Pro Button -->
                        <?php if (!empty($pro_button_url) && !empty($pro_button_title)): ?>
                            <a href="<?php echo esc_url($pro_button_url, array('http', 'https')); ?>"
                                class="ccpigd-link-btn ccpigd-btn primary icon icon-crown"
                                <?php if ($pro_button_target === '_blank'): ?>
                                target="_blank"
                                rel="noopener noreferrer"
                                <?php else: ?>
                                target="_self"
                                <?php endif; ?>
                                aria-label="<?php echo esc_attr($pro_button_title); ?>">
                                <?php echo esc_html($pro_button_title); ?>
                            </a>
                        <?php endif; ?>

                        <!-- Free Download Button -->
                        <!-- <button class="ccp-free-download-btn ccpigd-btn secondary white icon icon-wordpress"
                            type="button"
                            aria-label="<?php echo esc_attr__('Download Free', 'demo-codeconfig'); ?>">
                            <?php echo esc_html__('Download Free', 'demo-codeconfig'); ?>
                        </button> -->
                    </div><!-- /.ccpigd-btn-group -->

                </div><!-- /.ccpigd-footer-cta-wrapper -->
            </div><!-- /.ccpigd-container -->
        </section>
<?php
    endif;
}
?>