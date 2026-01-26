<?php

/**
 * Theme functions and definitions
 *
 * @package Demo_CodeConfig
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Theme setup
 */

add_action('after_setup_theme', 'demo_codeconfig_setup_config');

function demo_codeconfig_setup_config()
{

    define('GET_THEME_URL', dirname(__FILE__));
    define('GET_THEME_URI', get_template_directory_uri());

    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');

    register_nav_menus(
        [
            'primary-menu'           => __('Primary Menu', 'demo-codeconfig'),
            'products-menu'         => __('Products Menu', 'demo-codeconfig'),
            'company-menu'           => __('Company Menu', 'demo-codeconfig'),
            'resources-menu'         => __('Resources Menu', 'demo-codeconfig'),
            'google-drive-menu'      => __('Google Drive Menu', 'demo-codeconfig'),
            'igd-help-center'        => __('IGD Help Center', 'demo-codeconfig'),
            'igd-resources'          => __('IGD Resources', 'demo-codeconfig'),
        ]
    );

    add_theme_support(
        'html5',
        [
            'search-form',
            'comment-form',
            'comment-list',
            'gallery',
            'caption',
            'style',
            'script',
        ]
    );

    // require_once GET_THEME_URL . '/core/config.php';
    require_once GET_THEME_URL . '/inc/demo-cc-enqueue.php';
    require_once GET_THEME_URL . '/inc/general-functions.php';
    require_once GET_THEME_URL . '/inc/cc-demo-acf-localized.php';
    // require_once GET_THEME_URL . '/inc/nav-walker.php';
    // require_once GET_THEME_URL . '/inc/cpt.php';
    // require_once GET_THEME_URL . '/inc/cc-ajax.php';
    // require_once GET_THEME_URL . '/inc/cc-sidebar.php';
    // require_once GET_THEME_URL . '/inc/cc-custom-breadcrumb.php';
}
