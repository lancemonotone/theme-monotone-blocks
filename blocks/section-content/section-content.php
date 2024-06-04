<section <?php if(empty($_GET['context']) || $_GET['context'] !== 'edit') echo get_block_wrapper_attributes( array('class' => "mb-16 scroll-mt-16 lg:scroll-mt-24", 'aria-label' => "".PG_Blocks_v2::getAttribute( $args, 'section_name' )."", 'id' => "".PG_Blocks_v2::getAttribute( $args, 'section_id' )."", ) ); else echo 'data-wp-block-props="true"'; ?>>
    <div class="-mx-6 backdrop-blur mb-4 px-6 py-5 section-header sticky top-0 w-screen z-20 md:-mx-12 md:px-12 lg:mx-auto lg:opacity-0 lg:px-0 lg:py-0 lg:relative lg:sr-only lg:top-auto lg:w-full">
        <h2 class="text-xl tracking-widest lg:sr-only"><?php echo PG_Blocks_v2::getAttribute( $args, 'section_name' ) ?></h2>
    </div>
        <div <?php if(!empty($_GET['context']) && $_GET['context'] === 'edit') echo 'data-wp-inner-blocks'; ?>>
        <?php if(empty($_GET['context']) || $_GET['context'] !== 'edit') echo PG_Blocks_v2::getInnerContent( $args ); ?>
    </div>
</section>