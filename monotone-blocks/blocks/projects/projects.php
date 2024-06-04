<div <?php if(empty($_GET['context']) || $_GET['context'] !== 'edit') echo get_block_wrapper_attributes( array() ); else echo 'data-wp-block-props="true"'; ?>> 
    <?php
        $projects_query_args = array(
            'post_type' => 'project',
            'nopaging' => true,
            'order' => 'ASC',
            'orderby' => 'menu_order'
        )
    ?>
    <?php $projects_query = new WP_Query( $projects_query_args ); ?>
    <?php if ( $projects_query->have_posts() ) : ?>
        <ul class="group/list"> 
            <?php while ( $projects_query->have_posts() ) : $projects_query->the_post(); ?>
                <?php PG_Helper_v2::rememberShownPost(); ?>
                <li id="post-<?php the_ID(); ?>" <?php post_class( 'ease-in-out mb-12 transition-opacity lg:sticky lg:top-24 overlap-9' ); ?>> 
                    <div class="grid group/card md:gap-4 pb-1 relative sm:gap-8 sm:grid-cols-12 transition-all"> 
                        <div class="-inset-x-4 -inset-x-6 -inset-y-4 absolute block card-bg motion-reduce:transition-none transition z-0 md:rounded-md lg:group-hover/card:drop-shadow-lg"> 
</div>                         
                        <?php $image_attributes = !empty( get_the_ID() ) ? wp_get_attachment_image_src( PG_Image::isPostImage() ? get_the_ID() : get_post_thumbnail_id( get_the_ID() ), 'medium' ) : null; ?>
                        <div class="<?php if($image_attributes) echo 'with-image'; ?> flex flex-col font-semibold mb-2 mt-1 object-cover sm:col-span-3 text-background-200 text-xs tracking-wide uppercase z-10" aria-label="2024 to Present" style="<?php if($image_attributes) echo 'background-image:url(\''.$image_attributes[0].'\')' ?>"> 
</div>                         
                        <div class="sm:col-span-8 z-10">
                            <header>
                                <h3 class="font-medium inline-block leading-snug"><a class="group/link inline-flex items-center" href="<?php echo esc_url( get_permalink() ); ?>" target="_blank" rel="noreferrer noopener" aria-foo="Start" aria-label="<?php echo get_the_title() . ' - ' ?> <?php echo '(opens in a new tab)' ?>"><span class="group-[.contrast]:border-b group-[.contrast]:border-dotted inline-block"><?php the_title(); ?></span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"> 
                                            <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path>                                             
                                        </svg></a></h3>
                            </header>                             
                            <div class="mt-2 text-background-200 text-sm leading-normal">
                                <?php the_content(); ?>
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
                            <span href="" class="font-bold group-hover/card:block hidden object-contain text-background-200 text-right text-xs uppercase z-10"><a href="<?php echo esc_url( get_edit_post_link() ); ?>" aria-label="Edit post" target="_blank" class="inline-block"><svg fill="currentColor" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 528.899 528.899" xml:space="preserve" preserveAspectRatio width="25" height="25"> 
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
    <div class="mt-12">
        <a class="inline-flex items-center font-medium leading-tight text-background-900 font-semibold text-background-900 group" aria-label="View Full Project Archive" href="/archive"><span><span class="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none"><?php _e( 'View Full Project', 'monotone_blocks' ); ?><!-- --> </span><span class="whitespace-nowrap"><span class="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none"><?php _e( 'Archive', 'monotone_blocks' ); ?></span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" aria-hidden="true"> 
                        <path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd"></path>                         
                    </svg></span></span></a> 
    </div>     
</div>