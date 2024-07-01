<?php

        PG_Blocks_v2::register_block_type( array(
            'name' => 'monotone-blocks/jobs',
            'title' => __( 'Jobs', 'monotone_blocks' ),
            'icon' => '<svg fill="#000000" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M1920 1546.993v106.666H533.341v-106.666H1920ZM357.651 442.668l304.425 304.319-304.425 304.318-75.306-75.306 175.572-175.68h-351.25v853.33H0V693.653h457.917L282.345 518.08l75.306-75.413ZM1920 1120.222v106.773H533.341v-106.773H1920Zm-853.329-426.558V800.33H853.34V693.664h213.332Zm426.665 0V800.33h-213.332V693.664h213.332Zm426.664 0V800.33h-213.332V693.664H1920ZM1920 267v106.666H533.341V267H1920Z" fill-rule="evenodd"></path> </g></svg>',
            'category' => 'monotone-blocks',
            'render_template' => 'blocks/jobs/jobs.php',
            'supports' => array(),
            'base_url' => get_template_directory_uri(),
            'base_path' => get_template_directory(),
            'js_file' => 'blocks/jobs/jobs.js',
            'attributes' => array(
                'show_resume_link' => array(
                    'type' => 'string',
                    'default' => ''
                ),
                'resume_link_url' => array(
                    'type' => 'object',
                    'default' => array('post_id' => 0, 'url' => '', 'post_type' => '', 'title' => '')
                )
            ),
            'example' => array(
'show_resume_link' => '', 'resume_link_url' => array('post_id' => 0, 'url' => '#', 'post_type' => '', 'title' => '')
            ),
            'dynamic' => true,
            'version' => '1.0.571'
        ) );
