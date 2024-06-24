<?php

        PG_Blocks_v2::register_block_type( array(
            'name' => 'monotone-blocks/frontpage-posts',
            'title' => __( 'Frontpage Posts', 'monotone_blocks' ),
            'icon' => '<svg fill="#000000" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M3 4L3 26L6 26L6 46L20 46L30 46L44 46L44 26L47 26L47 25L47 4L3 4 z M 5 6L45 6L45 24L43.167969 24 A 1.0001 1.0001 0 0 0 42.841797 24L32.548828 24L25 12.136719L17.451172 24L7.1542969 24 A 1.0001 1.0001 0 0 0 6.984375 23.986328 A 1.0001 1.0001 0 0 0 6.8398438 24L5 24L5 6 z M 25 15.863281L31.451172 26L42 26L42 44L30 44L30 35C30 32.250484 27.749516 30 25 30C22.250484 30 20 32.250484 20 35L20 44L8 44L8 26L18.548828 26L25 15.863281 z M 10 30L10 31L10 39L18 39L18 30L10 30 z M 32 30L32 31L32 39L40 39L40 30L32 30 z M 12 32L16 32L16 37L12 37L12 32 z M 25 32C26.668484 32 28 33.331516 28 35L28 44L22 44L22 35C22 33.331516 23.331516 32 25 32 z M 34 32L38 32L38 37L34 37L34 32 z"></path></g></svg>',
            'category' => 'monotone-blocks',
            'render_template' => 'blocks/frontpage-posts/frontpage-posts.php',
            'supports' => array(),
            'base_url' => get_template_directory_uri(),
            'base_path' => get_template_directory(),
            'js_file' => 'blocks/frontpage-posts/frontpage-posts.js',
            'attributes' => array(
                'show_archive_link' => array(
                    'type' => 'string',
                    'default' => ''
                ),
                'archive_link_url' => array(
                    'type' => 'object',
                    'default' => array('post_id' => 0, 'url' => '', 'post_type' => '', 'title' => '')
                )
            ),
            'example' => array(
'show_archive_link' => '', 'archive_link_url' => array('post_id' => 0, 'url' => '#', 'post_type' => '', 'title' => '')
            ),
            'dynamic' => true,
            'version' => '1.0.458'
        ) );
