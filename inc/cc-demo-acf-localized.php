
<?php

// Save ACF fields to theme
add_filter('acf/settings/save_json', function () {
    return get_stylesheet_directory() . '/acf-json';
});

// Load ACF fields from theme
add_filter('acf/settings/load_json', function ($paths) {
    unset($paths[0]); // remove default path
    $paths[] = get_stylesheet_directory() . '/acf-json';
    return $paths;
});
