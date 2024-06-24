
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
    
    const block = registerBlockType( 'monotone-blocks/social-icon', {
        apiVersion: 2,
        title: 'Social Icon',
        description: '',
        icon: el('svg', { viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, [el('g', { id: 'SVGRepo_bgCarrier', strokeWidth: '0' }), el('g', { id: 'SVGRepo_tracerCarrier', strokeLinecap: 'round', strokeLinejoin: 'round' }), el('g', { id: 'SVGRepo_iconCarrier' }, [' ', el('path', { d: 'M12 9C10.3431 9 9 7.65685 9 6C9 4.34315 10.3431 3 12 3C13.6569 3 15 4.34315 15 6C15 7.65685 13.6569 9 12 9Z', stroke: '#1C274C', strokeWidth: '1.5' }), ' ', el('path', { d: 'M5.5 21C3.84315 21 2.5 19.6569 2.5 18C2.5 16.3431 3.84315 15 5.5 15C7.15685 15 8.5 16.3431 8.5 18C8.5 19.6569 7.15685 21 5.5 21Z', stroke: '#1C274C', strokeWidth: '1.5' }), ' ', el('path', { d: 'M18.5 21C16.8431 21 15.5 19.6569 15.5 18C15.5 16.3431 16.8431 15 18.5 15C20.1569 15 21.5 16.3431 21.5 18C21.5 19.6569 20.1569 21 18.5 21Z', stroke: '#1C274C', strokeWidth: '1.5' }), ' ', el('path', { opacity: '0.5', d: 'M20 13C20 10.6106 18.9525 8.46589 17.2916 7M4 13C4 10.6106 5.04752 8.46589 6.70838 7M10 20.748C10.6392 20.9125 11.3094 21 12 21C12.6906 21 13.3608 20.9125 14 20.748', stroke: '#1C274C', strokeWidth: '1.5', strokeLinecap: 'round' }), ' '])]),
        category: 'monotone-blocks',
        keywords: [],
        supports: {},
        attributes: {
            link_title: {
                type: 'string',
                default: 'GitHub',
            },
            social_link: {
                type: 'object',
                default: {post_id: 0, url: 'https://github.com/bchiang7', title: '', 'post_type': null},
            },
            social_icon: {
                type: 'object',
                default: {id: 0, url: '', size: '', svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="h-6 w-6" aria-hidden="true">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
</svg>`, alt: null},
            }
        },
        example: { attributes: { link_title: 'GitHub', social_link: {post_id: 0, url: 'https://github.com/bchiang7', title: '', 'post_type': null}, social_icon: {id: 0, url: '', size: '', svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="h-6 w-6" aria-hidden="true">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
</svg>`, alt: null} } },
        edit: function ( props ) {
            const blockProps = useBlockProps({ className: 'mr-5 text-xs shrink-0' });
            const setAttributes = props.setAttributes; 
            
            props.social_icon = useSelect(function( select ) {
                return {
                    social_icon: props.attributes.social_icon.id ? select('core').getMedia(props.attributes.social_icon.id) : undefined
                };
            }, [props.attributes.social_icon] ).social_icon;
            
            
            const innerBlocksProps = null;
            
            
            return el(Fragment, {}, [
                el('li', { ...blockProps }, [el('a', { className: 'block hover:text-slate-200', href: propOrDefault( props.attributes.social_link.url, 'social_link', 'url' ), target: '_blank', rel: 'noreferrer noopener', title: propOrDefault( props.attributes.link_title, 'link_title' ), 'aria-label': propOrDefault( props.attributes.link_title, 'link_title' ), onClick: function(e) { e.preventDefault(); } }, [el(RichText, { tagName: 'span', className: 'sr-only', value: propOrDefault( props.attributes.link_title, 'link_title' ), onChange: function(val) { setAttributes( {link_title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), props.attributes.social_icon && !props.attributes.social_icon.url && propOrDefault( props.attributes.social_icon.svg, 'social_icon', 'svg' ) && pgCreateSVG(RawHTML, {}, pgMergeInlineSVGAttributes(propOrDefault( props.attributes.social_icon.svg, 'social_icon', 'svg' ), { className: 'h-6 w-6', 'aria-hidden': 'true' })), props.attributes.social_icon && props.attributes.social_icon.url && el('img', { className: 'h-6 w-6 ' + (props.attributes.social_icon.id ? ('wp-image-' + props.attributes.social_icon.id) : ''), 'aria-hidden': 'true', src: propOrDefault( props.attributes.social_icon.url, 'social_icon', 'url' ) })]), ' ']),                        
                
                    el( InspectorControls, {},
                        [
                            
                        pgMediaImageControl('social_icon', setAttributes, props, 'full', true, 'Social Icon', '' ),
                                        
                            el(Panel, {},
                                el(PanelBody, {
                                    title: __('Block properties')
                                }, [
                                    
                                    el(TextControl, {
                                        value: props.attributes.link_title,
                                        help: __( '' ),
                                        label: __( 'Link Title' ),
                                        onChange: function(val) { setAttributes({link_title: val}) },
                                        type: 'text'
                                    }),
                                    pgUrlControl('social_link', setAttributes, props, 'Link URL', '', null ),    
                                ])
                            )
                        ]
                    )                            

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
