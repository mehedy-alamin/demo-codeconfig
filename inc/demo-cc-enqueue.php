<?php
/**
 * Enqueue theme scripts and styles
 *
 * @package Demo_CodeConfig
 */
function codeconfig_load_scripts() {
    wp_enqueue_style('demo-codeconfig-style', get_template_directory_uri() . '/assets/css/codeconfig-style.css',  [], time(), false);
    wp_enqueue_script('demo-codeconfig-scripts', get_template_directory_uri() . '/assets/js/codeconfig-scripts.js', ['jquery', 'wp-util'], time(), true);
}
add_action('wp_enqueue_scripts', 'codeconfig_load_scripts');







