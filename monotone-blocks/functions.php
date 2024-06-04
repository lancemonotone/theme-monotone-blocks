<?php
$pinegrow_run_code = true;

/* Begin - Prevent broken project from crashing the Pinegrow editor */
if(defined('DOING_AJAX') && DOING_AJAX && !empty($_REQUEST['action']) && strpos($_REQUEST['action'], 'pinegrow_api') === 0) {
    $pinegrow_run_code = false; //do not run during Pinegrow API calls
}
if(strpos($_SERVER['REQUEST_URI'], '/wp-admin/admin.php?page=pinegrow-projects') === 0 || strpos($_SERVER['REQUEST_URI'], '/wp-login') === 0 || (strpos($_SERVER['REQUEST_URI'], '/wp-admin/plugins.php') === 0 && strpos($_SERVER['REQUEST_URI'], '/wp-admin/plugins.php?action=activate') === false)) {
    //do not load when editor is loading, during login and plugin manipulation in admin, except when plugin is being activated
    $pinegrow_run_code = false;
}
if( $pinegrow_run_code ) :

/* End - Prevent broken project from crashing the Pinegrow editor */            
?><?php
if ( ! function_exists( 'monotone_blocks_setup' ) ) :

function monotone_blocks_setup() {

    /*
     * Make theme available for translation.
     * Translations can be filed in the /languages/ directory.
     */
    /* Pinegrow generated Load Text Domain Begin */
    load_theme_textdomain( 'monotone_blocks', get_template_directory() . '/languages' );
    /* Pinegrow generated Load Text Domain End */

    // Add default posts and comments RSS feed links to head.
    add_theme_support( 'automatic-feed-links' );

    /*
     * Let WordPress manage the document title.
     */
    add_theme_support( 'title-tag' );
    
    /*
     * Enable support for Post Thumbnails on posts and pages.
     */
    add_theme_support( 'post-thumbnails' );
    //Support custom logo
    add_theme_support( 'custom-logo' );

    // Add menus.
    register_nav_menus( array(
        'primary' => __( 'Primary Menu', 'monotone_blocks' ),
        'social'  => __( 'Social Links Menu', 'monotone_blocks' ),
    ) );

/*
     * Register custom menu locations
     */
    /* Pinegrow generated Register Menus Begin */

    /* Pinegrow generated Register Menus End */
    
/*
    * Set image sizes
     */
    /* Pinegrow generated Image sizes Begin */

    /* Pinegrow generated Image sizes End */
    
    /*
     * Switch default core markup for search form, comment form, and comments
     * to output valid HTML5.
     */
    add_theme_support( 'html5', array(
        'search-form', 'comment-form', 'comment-list', 'gallery', 'caption'
    ) );

    /*
     * Enable support for Post Formats.
     */
    add_theme_support( 'post-formats', array(
        'aside', 'image', 'video', 'quote', 'link', 'gallery', 'status', 'audio', 'chat'
    ) );

    /*
     * Enable support for Page excerpts.
     */
     add_post_type_support( 'page', 'excerpt' );
}
endif; // monotone_blocks_setup

add_action( 'after_setup_theme', 'monotone_blocks_setup' );


if ( ! function_exists( 'monotone_blocks_init' ) ) :

function monotone_blocks_init() {

    
    // Use categories and tags with attachments
    register_taxonomy_for_object_type( 'category', 'attachment' );
    register_taxonomy_for_object_type( 'post_tag', 'attachment' );

    /*
     * Register custom post types. You can also move this code to a plugin.
     */
    /* Pinegrow generated Custom Post Types Begin */

    /* Pinegrow generated Custom Post Types End */
    
    /*
     * Register custom taxonomies. You can also move this code to a plugin.
     */
    /* Pinegrow generated Taxonomies Begin */

    /* Pinegrow generated Taxonomies End */

}
endif; // monotone_blocks_setup

add_action( 'init', 'monotone_blocks_init' );


if ( ! function_exists( 'monotone_blocks_custom_image_sizes_names' ) ) :

function monotone_blocks_custom_image_sizes_names( $sizes ) {

    /*
     * Add names of custom image sizes.
     */
    /* Pinegrow generated Image Sizes Names Begin*/
    /* This code will be replaced by returning names of custom image sizes. */
    /* Pinegrow generated Image Sizes Names End */
    return $sizes;
}
add_action( 'image_size_names_choose', 'monotone_blocks_custom_image_sizes_names' );
endif;// monotone_blocks_custom_image_sizes_names



if ( ! function_exists( 'monotone_blocks_widgets_init' ) ) :

function monotone_blocks_widgets_init() {

    /*
     * Register widget areas.
     */
    /* Pinegrow generated Register Sidebars Begin */

    /* Pinegrow generated Register Sidebars End */
}
add_action( 'widgets_init', 'monotone_blocks_widgets_init' );
endif;// monotone_blocks_widgets_init



if ( ! function_exists( 'monotone_blocks_customize_register' ) ) :

function monotone_blocks_customize_register( $wp_customize ) {
    // Do stuff with $wp_customize, the WP_Customize_Manager object.

    /* Pinegrow generated Customizer Controls Begin */
    $pgwp_sanitize = function_exists('pgwp_sanitize_placeholder') ? 'pgwp_sanitize_placeholder' : null;

    $wp_customize->add_setting( 'site-description', array(
        'type' => 'theme_mod',
        'sanitize_callback' => $pgwp_sanitize
    ));

    $wp_customize->add_control( 'site-description', array(
        'label' => __( 'Site Description', 'monotone_blocks' ),
        'type' => 'textarea',
        'section' => 'title_tagline'
    ));

    /* Pinegrow generated Customizer Controls End */

}
add_action( 'customize_register', 'monotone_blocks_customize_register' );
endif;// monotone_blocks_customize_register


if ( ! function_exists( 'monotone_blocks_enqueue_scripts' ) ) :
    function monotone_blocks_enqueue_scripts() {

        /* Pinegrow generated Enqueue Scripts Begin */

    wp_enqueue_script( 'monotone_blocks-theme', get_template_directory_uri() . '/js/theme.js', null, '1.0.332', true );

    /* Pinegrow generated Enqueue Scripts End */

        /* Pinegrow generated Enqueue Styles Begin */

    wp_enqueue_style( 'monotone_blocks-theme', get_template_directory_uri() . '/css/theme.css', null, '1.0.332', 'all' );

    wp_enqueue_style( 'monotone_blocks-tailwind', get_template_directory_uri() . '/tailwind_theme/tailwind.css', null, '1.0.332', 'all' );

    wp_enqueue_style( 'monotone_blocks-styles', get_template_directory_uri() . '/css/styles.css', null, '1.0.332', 'all' );

    wp_deregister_style( 'monotone_blocks-style' );
    wp_enqueue_style( 'monotone_blocks-style', get_bloginfo('stylesheet_url'), [], '1.0.332', 'all');

    /* Pinegrow generated Enqueue Styles End */

    }
    add_action( 'wp_enqueue_scripts', 'monotone_blocks_enqueue_scripts' );
endif;

function pgwp_sanitize_placeholder($input) { return $input; }
/*
 * Resource files included by Pinegrow.
 */
/* Pinegrow generated Include Resources Begin */
require_once "inc/custom.php";
if( !class_exists( 'PG_Helper_v2' ) ) { require_once "inc/wp_pg_helpers.php"; }
if( !class_exists( 'PG_Blocks_v2' ) ) { require_once "inc/wp_pg_blocks_helpers.php"; }
if( !class_exists( 'PG_Smart_Walker_Nav_Menu' ) ) { require_once "inc/wp_smart_navwalker.php"; }

    /* Pinegrow generated Include Resources End */

/* Enqueue Admin Styles and Scripts */

function monotone_blocks_selectively_enqueue_admin_script( $page ) {

    // Don't edit anything between the following comments.
    /* Pinegrow generated Enqueue Admin Styles Begin */

    /* Pinegrow generated Enqueue Admin Styles End */
    
    /* Pinegrow generated Enqueue Admin Scripts Begin */

    /* Pinegrow generated Enqueue Admin Scripts End */
        
}
add_action( 'admin_enqueue_scripts', 'monotone_blocks_selectively_enqueue_admin_script' );

/* End Enqueue Admin Styles and Scripts */


/* Creating Editor Blocks with Pinegrow */

if ( ! function_exists('monotone_blocks_blocks_init') ) :
function monotone_blocks_blocks_init() {
    // Register blocks. Don't edit anything between the following comments.
    /* Pinegrow generated Register Pinegrow Blocks Begin */
    require_once 'blocks/spotlight/spotlight_register.php';
    require_once 'blocks/site-header/site-header_register.php';
    require_once 'blocks/section-content/section-content_register.php';
    require_once 'blocks/jobs/jobs_register.php';
    require_once 'blocks/projects/projects_register.php';
    require_once 'blocks/site-footer/site-footer_register.php';

    /* Pinegrow generated Register Pinegrow Blocks End */
}
add_action('init', 'monotone_blocks_blocks_init');
endif;

/* End of creating Editor Blocks with Pinegrow */


/* Register Blocks Categories */

function monotone_blocks_register_blocks_categories( $categories ) {

    // Don't edit anything between the following comments.
    /* Pinegrow generated Register Blocks Category Begin */

$categories = array_merge( $categories, array( array(
        'slug' => 'monotone-blocks',
        'title' => __( 'Monotone Blocks', 'monotone_blocks' )
    ) ) );

    /* Pinegrow generated Register Blocks Category End */
    
    return $categories;
}
add_action( version_compare('5.8', get_bloginfo('version'), '<=' ) ? 'block_categories_all' : 'block_categories', 'monotone_blocks_register_blocks_categories');

/* End of registering Blocks Categories */


/* Setting up theme supports options */

function monotone_blocks_setup_theme_supports() {
    // Don't edit anything between the following comments.
    /* Pinegrow generated Theme Supports Begin */
    
//Tell WP to scope loaded editor styles to the block editor                    
add_theme_support( 'editor-styles' );
    /* Pinegrow generated Theme Supports End */
}
add_action('after_setup_theme', 'monotone_blocks_setup_theme_supports');

/* End of setting up theme supports options */


/* Loading editor styles for blocks */

function monotone_blocks_add_blocks_editor_styles() {
// Add blocks editor styles. Don't edit anything between the following comments.
/* Pinegrow generated Load Blocks Editor Styles Begin */
    add_editor_style( 'tailwind_theme/tailwind_for_wp_editor.css' );
    add_editor_style( 'css/theme.css' );
    add_editor_style( 'css/styles.css' );

    /* Pinegrow generated Load Blocks Editor Styles End */
}
add_action('admin_init', 'monotone_blocks_add_blocks_editor_styles');

/* End of loading editor styles for blocks */


/* Control how block assets are loaded on the front-end */
function monotone_blocks_should_load_separate_core_block_assets() {
    /* Pinegrow generated Load Block Assets Separately Begin */
    //Load only assets of blocks that are used on the page
    add_filter( 'should_load_separate_core_block_assets', '__return_true' );

    /* Pinegrow generated Load Block Assets Separately End */
}
add_action('init', 'monotone_blocks_should_load_separate_core_block_assets');
/* End of controlling how block assets are loaded on the front-end */

?><?php
endif; //end if ( $pinegrow_run_plugin )
