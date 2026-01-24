<?php

/**
 * Page template
 *
 * @package Demo_CodeConfig
 */

get_header(); ?>

<section class="cc-home-hero hero-bg-shadow relative">
    <main id="main-content" class="main-content">
        <?php while (have_posts()) : the_post(); ?>
            <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                <header class="entry-header">
                    <h1 class="entry-title"><?php the_title(); ?></h1>
                </header>

                <?php if (has_post_thumbnail()) : ?>
                    <div class="post-thumbnail">
                        <?php the_post_thumbnail('large'); ?>
                    </div>
                <?php endif; ?>

                <div class="entry-content">
                    <?php the_content(); ?>

                    <?php
                    wp_link_pages(array(
                        'before' => '<div class="page-links">' . __('Pages:', 'demo-codeconfig'),
                        'after' => '</div>',
                    ));
                    ?>
                </div>
            </article>

            <?php
            // If comments are open or we have at least one comment, load up the comment template.
            if (comments_open() || get_comments_number()) :
                comments_template();
            endif;
            ?>

        <?php endwhile; ?>
    </main>
</section>

<?php get_sidebar(); ?>
<?php get_footer(); ?>