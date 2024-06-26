<?php
/* 
    Use this file to add custom PHP code to your theme or plugin 
    */
?><?php
    
    add_action( 'enqueue_block_assets', function(){
        if(is_admin()){
        wp_enqueue_script( 'monotone_blocks-theme', get_template_directory_uri() . '/js/theme.js', null, '1.0.59', true );
        }
    } );

    add_filter('excerpt_more', function($more){
        global $post;
        return '... <a href="'. get_permalink($post->ID) . '" class="read-more">Read More</a>';
    });