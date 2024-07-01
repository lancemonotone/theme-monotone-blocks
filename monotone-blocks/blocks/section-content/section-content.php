<section <?php if(empty($_GET['context']) || $_GET['context'] !== 'edit') echo get_block_wrapper_attributes( array('class' => "mb-16", 'aria-label' => "".PG_Blocks_v2::getAttribute( $args, 'section_name' )."", 'id' => "".PG_Blocks_v2::getAttribute( $args, 'section_id' )."", ) ); else echo 'data-wp-block-props="true"'; ?>>
    <div class="-mx-12 -top-1 backdrop-blur mb-4 px-12 py-5 relative sticky z-20">
        <h2 class="uppercase"><?php echo PG_Blocks_v2::getAttribute( $args, 'section_name' ) ?></h2>
    </div>
        <div <?php if(!empty($_GET['context']) && $_GET['context'] === 'edit') echo 'data-wp-inner-blocks'; ?>>
        <?php if(empty($_GET['context']) || $_GET['context'] !== 'edit') echo PG_Blocks_v2::getInnerContent( $args ); ?>
    </div>
</section>