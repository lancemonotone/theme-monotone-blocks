
( function ( blocks, element, blockEditor ) {
    const el = element.createElement,
        registerBlockType = blocks.registerBlockType,
        ServerSideRender = PgServerSideRender2,
        InspectorControls = blockEditor.InspectorControls,
        useBlockProps = blockEditor.useBlockProps;
        
    const {__} = wp.i18n;
    const {ColorPicker, TextControl, ToggleControl, SelectControl, Panel, PanelBody, Disabled, TextareaControl, BaseControl} = wp.components;
    const {useSelect} = wp.data;
    const {RawHTML, Fragment} = element;
   
    const {InnerBlocks, URLInputButton, RichText} = wp.blockEditor;
    const useInnerBlocksProps = blockEditor.useInnerBlocksProps || blockEditor.__experimentalUseInnerBlocksProps;
    
    const propOrDefault = function(val, prop, field) {
        if(block.attributes[prop] && (val === null || val === '')) {
            return field ? block.attributes[prop].default[field] : block.attributes[prop].default;
        }
        return val;
    }
    
    const block = registerBlockType( 'monotone-blocks/spotlight', {
        apiVersion: 2,
        title: 'Spotlight',
        description: 'A spotlight that follows your mouse',
        icon: el('svg', { fill: '#000000', viewBox: '0 0 50 50', xmlns: 'http://www.w3.org/2000/svg', xmlnsXlink: 'http://www.w3.org/1999/xlink' }, [el('g', { id: 'SVGRepo_bgCarrier', strokeWidth: '0' }), el('g', { id: 'SVGRepo_tracerCarrier', strokeLinecap: 'round', strokeLinejoin: 'round' }), el('g', { id: 'SVGRepo_iconCarrier' }, el('path', { d: 'M4.34375 -0.03125C4.203125 -0.0234375 4.074219 0.00390625 3.9375 0.03125C3.585938 0.105469 3.253906 0.238281 2.9375 0.46875C2.925781 0.476563 2.917969 0.492188 2.90625 0.5L1.21875 1.6875C1.207031 1.6875 1.199219 1.6875 1.1875 1.6875C0.0234375 2.558594 -0.457031 4.285156 0.46875 5.5625C0.476563 5.574219 0.492188 5.582031 0.5 5.59375L2.90625 9.0625L2.0625 11.6875C1.882813 12.039063 1.925781 12.460938 2.171875 12.769531C2.417969 13.078125 2.820313 13.210938 3.203125 13.113281C3.582031 13.015625 3.871094 12.703125 3.9375 12.3125L4.625 10.1875L5.28125 11.6875C5.398438 11.957031 5.628906 12.164063 5.914063 12.25C6.195313 12.332031 6.503906 12.289063 6.75 12.125L10.5625 9.625C10.816406 9.453125 10.976563 9.179688 11.003906 8.875C11.027344 8.570313 10.910156 8.269531 10.6875 8.0625L9.3125 6.75L11.90625 7C12.457031 7.050781 12.949219 6.644531 13 6.09375C13.050781 5.542969 12.644531 5.050781 12.09375 5L9.28125 4.75L6.9375 1.25C6.929688 1.230469 6.917969 1.207031 6.90625 1.1875C6.308594 0.390625 5.316406 -0.0820313 4.34375 -0.03125 Z M 4.375 2C4.691406 1.96875 5.097656 2.117188 5.3125 2.40625L7.3125 5.40625L4.46875 7.375C4.4375 7.394531 4.40625 7.414063 4.375 7.4375L4.25 7.5L2.125 4.4375C2.113281 4.425781 2.105469 4.417969 2.09375 4.40625C1.855469 4.085938 1.980469 3.632813 2.40625 3.3125L4.0625 2.125C4.074219 2.113281 4.082031 2.105469 4.09375 2.09375C4.164063 2.039063 4.269531 2.011719 4.375 2 Z M 7.46875 7.75L8.40625 8.65625L6.65625 9.8125L6.125 8.65625 Z M 12.59375 11.375C12.5625 11.382813 12.53125 11.394531 12.5 11.40625C12.121094 11.484375 11.824219 11.769531 11.730469 12.144531C11.636719 12.515625 11.765625 12.910156 12.0625 13.15625L42.5625 39C39.71875 38.359375 36.253906 38 32.5 38C27.863281 38 23.652344 38.554688 20.53125 39.5C18.972656 39.972656 17.695313 40.550781 16.71875 41.25C16.585938 41.347656 16.46875 41.457031 16.34375 41.5625L8.75 15.03125C8.628906 14.554688 8.179688 14.234375 7.6875 14.28125C7.394531 14.316406 7.128906 14.476563 6.964844 14.726563C6.804688 14.972656 6.757813 15.277344 6.84375 15.5625L15.03125 44.28125C15.144531 45.285156 15.828125 46.113281 16.71875 46.75C17.695313 47.449219 18.972656 48.027344 20.53125 48.5C23.652344 49.445313 27.863281 50 32.5 50C37.136719 50 41.347656 49.445313 44.46875 48.5C46.027344 48.027344 47.304688 47.449219 48.28125 46.75C49.257813 46.050781 50 45.136719 50 44C50 43.289063 49.671875 42.695313 49.21875 42.15625C49.199219 42.113281 49.179688 42.070313 49.15625 42.03125C49.144531 42.019531 49.136719 42.011719 49.125 42C49.082031 41.929688 49.027344 41.867188 48.96875 41.8125C48.761719 41.609375 48.523438 41.425781 48.28125 41.25C48.25 41.230469 48.21875 41.207031 48.1875 41.1875L13.34375 11.625C13.164063 11.464844 12.929688 11.375 12.6875 11.375C12.65625 11.375 12.625 11.375 12.59375 11.375 Z M 32.5 40C36.972656 40 41.023438 40.542969 43.875 41.40625C45.300781 41.839844 46.429688 42.378906 47.125 42.875L47.5625 43.25C47.589844 43.285156 47.621094 43.316406 47.65625 43.34375C47.902344 43.613281 48 43.839844 48 44C48 44.246094 47.820313 44.628906 47.125 45.125C46.429688 45.621094 45.300781 46.160156 43.875 46.59375C41.023438 47.457031 36.972656 48 32.5 48C28.027344 48 23.976563 47.457031 21.125 46.59375C19.699219 46.160156 18.570313 45.621094 17.875 45.125C17.230469 44.660156 17.023438 44.308594 17 44.0625C17 44.03125 17 44 17 43.96875C17.011719 43.722656 17.203125 43.355469 17.875 42.875C18.570313 42.378906 19.699219 41.839844 21.125 41.40625C23.976563 40.542969 28.027344 40 32.5 40Z' }))]),
        category: 'monotone-blocks',
        keywords: [],
        supports: {},
        attributes: {
        },
        example: { attributes: {  } },
        edit: function ( props ) {
            const blockProps = useBlockProps({ id: 'spotlight' });
            const setAttributes = props.setAttributes; 
            
            
            const innerBlocksProps = null;
            
            
            return el(Fragment, {}, [
                el('div', { ...blockProps }),                        
                
            ]);
        },

        save: function(props) {
            return null;
        }                        

    } );
} )(
    window.wp.blocks,
    window.wp.element,
    window.wp.blockEditor
);                        
