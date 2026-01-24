<?php

/**
 * Main template file
 *
 * @package Demo_CodeConfig
 */

get_header(); ?>

<section class="cc-home-hero hero-bg-shadow relative">
    <main id="main-content" class="main-content">
        <?php if (have_posts()) : ?>
            <div class="posts-container">
                <?php while (have_posts()) : the_post(); ?>
                    <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                        <header class="entry-header">
                            <h2 class="entry-title">
                                <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                            </h2>
                            <div class="entry-meta">
                                <span class="posted-on"><?php echo get_the_date(); ?></span>
                                <span class="byline"> by <?php the_author(); ?></span>
                            </div>
                        </header>

                        <div class="entry-content">
                            <?php the_excerpt(); ?>
                        </div>

                        <footer class="entry-footer">
                            <a href="<?php the_permalink(); ?>" class="read-more">Read More</a>
                        </footer>
                    </article>
                <?php endwhile; ?>
            </div>

            <?php the_posts_navigation(); ?>

        <?php else : ?>
            <div class="no-posts">
                <h2>Nothing Found</h2>
                <p>Sorry, but nothing matched your search criteria.</p>
            </div>
        <?php endif; ?>
    </main>
</section>

<?php get_footer(); ?>