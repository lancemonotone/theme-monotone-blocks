<?php

        PG_Blocks_v2::register_block_type( array(
            'name' => 'monotone-blocks/site-footer',
            'title' => __( 'Site Footer', 'monotone_blocks' ),
            'icon' => '<svg fill="#000000" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg" transform="rotate(180)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M0 213.333C0 95.5126 95.5126 0 213.333 0H1706.67C1824.49 0 1920 95.5126 1920 213.333V1706.67C1920 1824.49 1824.49 1920 1706.67 1920H213.333C95.5126 1920 0 1824.49 0 1706.67V213.333ZM213.333 106.667C154.423 106.667 106.667 154.423 106.667 213.333V1706.67C106.667 1765.58 154.423 1813.33 213.333 1813.33H1706.67C1765.58 1813.33 1813.33 1765.58 1813.33 1706.67V213.333C1813.33 154.423 1765.58 106.667 1706.67 106.667H213.333ZM266.667 746.667C237.211 746.667 213.333 722.788 213.333 693.333V373.333C213.333 343.878 237.211 320 266.667 320H1653.33C1682.79 320 1706.67 343.878 1706.67 373.333V693.333C1706.67 722.788 1682.79 746.667 1653.33 746.667H266.667ZM346.667 426.667C331.939 426.667 320 438.606 320 453.333V613.333C320 628.061 331.939 640 346.667 640H1573.33C1588.06 640 1600 628.061 1600 613.333V453.333C1600 438.606 1588.06 426.667 1573.33 426.667H346.667Z"></path> </g></svg>',
            'category' => 'monotone-blocks',
            'render_template' => 'blocks/site-footer/site-footer.php',
            'supports' => array(),
            'base_url' => get_template_directory_uri(),
            'base_path' => get_template_directory(),
            'js_file' => 'blocks/site-footer/site-footer.js',
            'attributes' => array(

            ),
            'example' => array(

            ),
            'dynamic' => true,
            'has_inner_blocks' => true,
            'version' => '1.0.458'
        ) );
