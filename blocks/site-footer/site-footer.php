<footer <?php if(empty($_GET['context']) || $_GET['context'] !== 'edit') echo get_block_wrapper_attributes( array('class' => "max-w-md pb-16 pt-16 text-sm sm:pb-0", ) ); else echo 'data-wp-block-props="true" data-wp-inner-blocks'; ?>>
    <?php if(empty($_GET['context']) || $_GET['context'] !== 'edit') echo PG_Blocks_v2::getInnerContent( $args ); ?>
</footer>