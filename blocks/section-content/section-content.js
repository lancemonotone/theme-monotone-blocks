
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
    
    const block = registerBlockType( 'monotone-blocks/section-content', {
        apiVersion: 2,
        title: 'Content Section',
        description: '',
        icon: el('svg', { viewBox: '0 0 1920 1920', xmlns: 'http://www.w3.org/2000/svg', fill: '#000000' }, [el('g', { id: 'SVGRepo_bgCarrier', strokeWidth: '0' }), el('g', { id: 'SVGRepo_tracerCarrier', strokeLinecap: 'round', strokeLinejoin: 'round' }), el('g', { id: 'SVGRepo_iconCarrier' }, [' ', el('g', { fillRule: 'evenodd', clipRule: 'evenodd', stroke: 'none', strokeWidth: '1' }, [' ', el('path', { d: 'M1468.235 113v99.388l-112.94 112.941v-99.388H112.94v1468.235h1242.353v-438.211l112.941-112.941v664.094H0V113h1468.235ZM421.271 1163.353c96-9.035 154.729 108.423 190.87 197.647 28.235 68.894 38.4 92.612 72.283 96 33.882 3.388 89.223-58.73 112.94-101.647 16.53-26.51 51.42-34.6 77.93-18.07 26.51 16.529 34.6 51.42 18.07 77.929-9.035 16.94-92.611 160.376-205.552 160.376h-9.036c-70.023-4.517-121.976-48.564-169.411-166.023-47.436-117.46-77.93-127.624-77.93-127.624a484.518 484.518 0 0 0-97.13 225.883c-6.549 31.187-37.14 51.16-68.329 44.611-31.187-6.55-51.16-37.141-44.611-68.33 20.33-94.87 79.059-310.587 199.906-320.752Zm256.376-485.647v112.941H338.824V677.706h338.823ZM903.53 451.824v112.94H338.824v-112.94h564.705Z' }), ' ', el('path', { d: 'm1903.059 468.765-225.883-225.883a56.47 56.47 0 0 0-80.188 0L919.341 920.53a56.476 56.476 0 0 0-15.813 39.53v282.353h282.354a56.47 56.47 0 0 0 39.53-16.941l677.647-677.647c21.523-21.959 21.523-57.101 0-79.06Zm-740.894 660.706H1016.47V983.776l451.764-451.764 145.694 145.694-451.764 451.765Zm531.953-531.953-145.694-145.694 89.223-89.224 145.694 145.694-89.223 89.224Z' }), ' ']), ' '])]),
        category: 'monotone-blocks',
        keywords: [],
        supports: {},
        attributes: {
            section_id: {
                type: 'string',
                default: null,
            },
            section_name: {
                type: 'string',
                default: 'About me',
            }
        },
        example: { attributes: { section_id: null, section_name: 'About me' } },
        edit: function ( props ) {
            const blockProps = useBlockProps({ className: 'mb-16 scroll-mt-16 lg:scroll-mt-24', 'aria-label': propOrDefault( props.attributes.section_name, 'section_name' ), 'data-pg-hidden': null, id: propOrDefault( props.attributes.section_id, 'section_id' ) });
            const setAttributes = props.setAttributes; 
            
            
            const innerBlocksProps = useInnerBlocksProps({}, {
            } );
                            
            
            return el(Fragment, {}, [
                el('section', { ...blockProps }, [' ', el('div', { className: '-mx-6 backdrop-blur mb-4 px-6 py-5 section-header sticky top-0 w-screen z-20 md:-mx-12 md:px-12 lg:mx-auto lg:opacity-0 lg:px-0 lg:py-0 lg:relative lg:sr-only lg:top-auto lg:w-full' }, [' ', el(RichText, { tagName: 'h2', className: 'text-xl tracking-widest lg:sr-only', value: propOrDefault( props.attributes.section_name, 'section_name' ), onChange: function(val) { setAttributes( {section_name: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', { ...innerBlocksProps }), ' ']),                        
                
                    el( InspectorControls, {},
                        [
                            
                            el(Panel, {},
                                el(PanelBody, {
                                    title: __('Block properties')
                                }, [
                                    
                                    el(TextControl, {
                                        value: props.attributes.section_id,
                                        help: __( '' ),
                                        label: __( 'Section ID' ),
                                        onChange: function(val) { setAttributes({section_id: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.section_name,
                                        help: __( '' ),
                                        label: __( 'section_name' ),
                                        onChange: function(val) { setAttributes({section_name: val}) },
                                        type: 'text'
                                    }),    
                                ])
                            )
                        ]
                    )                            

            ]);
        },

            save: function(props) {
                return el(InnerBlocks.Content);
            }                        
    
    } );
} )(
    window.wp.blocks,
    window.wp.element,
    window.wp.blockEditor
);                        
