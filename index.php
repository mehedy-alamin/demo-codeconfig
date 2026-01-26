<?php

/**
 * Main template file
 *
 * @package Demo_CodeConfig
 */

get_header(); ?>

<section class="ccpigd-section ccpigd-hero-section ccpigd-section-top overflow-hidden relative ">
    <div class="ccpigd-hero-section-bg absolute">
        <img width="1920" height="1053" src="<?php echo GET_THEME_URI; ?>/assets/images/google-drive/Codeconfig-igd-banner-bg.png" alt="Hero Background">
    </div>
    <div class="igd-container">
        <div class="ccpigd-hero-content-box section-title-box text-center">
            <span class="ccpigd-hero-sub-title d-flex align-center">
                <i class="flex-center">
                    <img src="<?php echo GET_THEME_URI; ?>/assets/images/google-drive/shield_lock.svg?>" alt="Security icon" width="24" height="24">
                </i>
                Best Google Drive Integration Plugin For WordPress
            </span>
            <h1>Choose the Plan That Fits Your Needs and Get Started Confidently</h1>
            <p>Unlock the power of Google Drive in WordPress with ease and confidence.</p>
            <div class="ccpigd-hero-btns flex-center">
                <a class="ccpigd-btn primary icon icon-wordpress" href="https://codeconfig.dev/googledrive/" target="_blank" rel="noopener noreferrer">
                    <span>Get Started</span>
                </a>
            </div>
        </div>
    </div>
</section>

<?php get_template_part('template-part/cc-footer-cta'); ?>

<?php get_footer(); ?>