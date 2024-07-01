<div <?php if(empty($_GET['context']) || $_GET['context'] !== 'edit') echo get_block_wrapper_attributes( array() ); else echo 'data-wp-block-props="true"'; ?>> 
    <?php
        $posts_query_args = array(
            'post_type' => 'post',
            'nopaging' => true,
            'order' => 'DESC',
            'orderby' => 'date'
        )
    ?>
    <?php $posts_query = new WP_Query( $posts_query_args ); ?>
    <?php if ( $posts_query->have_posts() ) : ?>
        <ul class="cards group/list projects"> 
            <?php while ( $posts_query->have_posts() ) : $posts_query->the_post(); ?>
                <?php PG_Helper_v2::rememberShownPost(); ?>
                <li id="post-<?php the_ID(); ?>" <?php post_class( 'ease-in-out mb-12 lg:sticky lg:top-24 overlap-9' ); ?>> 
                    <div class="gap-8 grid grid-cols-1 group/card pb-2 relative transition-all sm:grid-cols-12"> 
                        <div class="-inset-x-4 -inset-x-6 -inset-y-4 absolute block motion-reduce:transition-none transition z-0 lg:group-hover/card:drop-shadow-lg sm:drop-shadow-sm cardbg shadow-[0_-1_0_0_var(--background-color-spot)] bg-[var(--primary-color)] rounded-md border-t bg-slate-600"> 
</div>
                        <div class="content-between font-semibold gap-4 grid grid-cols-4 mb-2 mt-1 sm:col-span-2 sm:content-start sm:grid-cols-1 text-background-200 text-center text-xs tracking-wide uppercase z-10" aria-label="2024 to Present"> <span class="mb-1"><?php the_time( get_option( 'date_format' ) ); ?></span> 
                        </div>                         
                        <div class="sm:col-span-9 z-10">
                            <header>
                                <h3 class="font-medium inline-block leading-snug"><a class="group/link inline-flex items-center leading-tight" href="<?php echo esc_url( get_permalink() ); ?>" aria-label="<?php echo get_the_title() ?>"><span class="group-[.contrast]:border-b group-[.contrast]:border-dotted inline-block"><?php the_title(); ?></span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"> 
                                            <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path>                                             
                                        </svg></a></h3>
                            </header>                             
                            <div class="mt-2 text-background-200 text-sm leading-normal">
                                <?php the_excerpt( ); ?>
                            </div>                             
                            <footer>
                                <?php $terms = get_the_terms( get_the_ID(), 'technology' ) ?>
                                <?php if( !empty( $terms ) ) : ?>
                                    <ul class="mt-2 flex flex-wrap" aria-label="Technologies used"> 
                                        <?php foreach( $terms as $term ) : ?>
                                            <li class="mr-1.5 mt-2"> <a class="btn-outline flex font-medium hover:z-10 items-center leading-5 no-underline px-3 py-1 rounded-full text-xs" href="<?php echo esc_url( get_term_link( $term, 'technology' ) ) ?>"><?php echo $term->name; ?></a> 
                                            </li>
                                        <?php endforeach; ?>                                                                                                                            
                                    </ul>
                                <?php endif; ?>
                            </footer>                             
                        </div>                         
                        <?php if ( current_user_can( 'edit_posts' ) ) : ?>
                            <span href="" class="absolute font-bold hidden object-contain right-0 text-background-200 text-right text-xs top-0 uppercase z-10 sm:group-hover/card:block"><a href="<?php echo esc_url( get_edit_post_link() ); ?>" aria-label="Edit post" target="_blank" class="inline-block"><svg fill="currentColor" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 528.899 528.899" xml:space="preserve" preserveAspectRatio width="25" height="25"> 
                                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>                                         
                                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>                                         
                                        <g id="SVGRepo_iconCarrier"> 
                                            <g> 
                                                <path d="M328.883,89.125l107.59,107.589l-272.34,272.34L56.604,361.465L328.883,89.125z M518.113,63.177l-47.981-47.981 c-18.543-18.543-48.653-18.543-67.259,0l-45.961,45.961l107.59,107.59l53.611-53.611 C532.495,100.753,532.495,77.559,518.113,63.177z M0.3,512.69c-1.958,8.812,5.998,16.708,14.811,14.565l119.891-29.069 L27.473,390.597L0.3,512.69z"></path>                                                 
                                            </g>                                             
                                        </g>                                         
                                    </svg></a></span>
                        <?php endif; ?> 
                    </div>                     
                </li>
            <?php endwhile; ?>
            <?php wp_reset_postdata(); ?> 
        </ul>
    <?php else : ?>
        <p><?php _e( 'Sorry, no posts matched your criteria.', 'monotone_blocks' ); ?></p>
    <?php endif; ?>
    <?php if ( PG_Blocks_v2::getAttribute( $args, 'show_archive_link', false ) ) : ?>
        <div class="mt-12"> 
            <?php if ( PG_Blocks_v2::getLinkUrl( $args, 'archive_link_url', false ) ) : ?>
                <a class="font-medium group/link inline-flex items-center leading-tight relative text-base" href="<?php echo (!empty($_GET['context']) && $_GET['context'] === 'edit') ? 'javascript:void()' : PG_Blocks_v2::getLinkUrl( $args, 'archive_link_url' ) ?>" aria-label="View Full Résumé (opens in a new tab)"><?php _e( 'View Blog', 'monotone_blocks' ); ?> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"> 
                        <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path>                         
                    </svg></a>
            <?php endif; ?> 
        </div>
    <?php endif; ?> 
</div>