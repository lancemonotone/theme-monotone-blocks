<header <?php if(empty($_GET['context']) || $_GET['context'] !== 'edit') echo get_block_wrapper_attributes( array('class' => "lg:flex lg:flex-col lg:justify-between lg:max-h-screen lg:py-24 lg:sticky lg:top-0 lg:w-1/2", ) ); else echo 'data-wp-block-props="true"'; ?>>
    <div> <a href="<?php echo esc_url( home_url() ); ?>" class="no-underline text-blue"><h1 class="font-bold inline-block text-4xl tracking-tight sm:text-5xl"><?php bloginfo( 'name' ); ?></h1></a> 
        <h2 class="mt-3 text-xl tracking-tight lg:text-2xl"><?php bloginfo( 'description' ); ?></h2> 
        <div class="mt-4 max-w-xs leading-normal">
            <?php echo get_theme_mod( 'site-description' ); ?>
        </div>         
        <nav class="nav hidden lg:block" aria-label="In-page jump links"> 
            <?php if ( has_nav_menu( 'primary' ) ) : ?>
                <?php
                    PG_Smart_Walker_Nav_Menu::init();
                    PG_Smart_Walker_Nav_Menu::$options['template'] = '<li class="{CLASSES}" id="{ID}">
                                                            <a class="flex group/nav-item items-center no-underline py-3" {ATTRS}><span class="group-focus-visible/nav-item:w-16 group-focus-visible:w-16 group-hover/nav-item:w-16 h-px motion-reduce:transition-none mr-4 nav-indicator transition-all w-8"></span><span class="font-bold group-focus-visible:text-background-900 group-hover:text-background-900 nav-text text-xs tracking-widest uppercase">{TITLE}</span></a> 
                                                        </li>';
                    PG_Smart_Walker_Nav_Menu::$options['current_class'] = 'active';
                    wp_nav_menu( array(
                        'container' => '',
                        'theme_location' => 'primary',
                        'items_wrap' => '<ul class="%2$s mt-16 w-max" id="%1$s">%3$s</ul>',
                        'walker' => new PG_Smart_Walker_Nav_Menu()
                ) ); ?>
            <?php endif; ?> 
        </nav>         
    </div>
</header>