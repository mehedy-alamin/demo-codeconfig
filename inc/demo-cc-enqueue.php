<?php

/**
 * Enqueue theme scripts and styles
 *
 * @package Demo_CodeConfig
 */
function codeconfig_load_scripts()
{
    wp_enqueue_style(
        'demo-codeconfig-fonts',
        get_template_directory_uri() . '/assets/fonts/google-fonts.css',
        [],
        time()
    );
    wp_enqueue_style(
        'demo-codeconfig-style',
        get_template_directory_uri() . '/assets/css/codeconfig-style.css',
        [],
        time()
    );


    wp_enqueue_script(
        'demo-codeconfig-scripts',
        get_template_directory_uri() . '/assets/js/codeconfig-scripts.js',
        ['jquery'],
        time(),
        true
    );

    wp_enqueue_script(
        'demo-igd-scripts',
        get_template_directory_uri() . '/assets/js/google-drive.js',
        ['jquery'],
        time(),
        true
    );
}
add_action('wp_enqueue_scripts', 'codeconfig_load_scripts');