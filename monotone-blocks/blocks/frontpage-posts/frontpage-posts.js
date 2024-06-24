
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
    
    const block = registerBlockType( 'monotone-blocks/frontpage-posts', {
        apiVersion: 2,
        title: 'Frontpage Posts',
        description: '',
        icon: el('svg', { fill: '#000000', viewBox: '0 0 50 50', xmlns: 'http://www.w3.org/2000/svg', xmlnsXlink: 'http://www.w3.org/1999/xlink' }, [el('g', { id: 'SVGRepo_bgCarrier', strokeWidth: '0' }), el('g', { id: 'SVGRepo_tracerCarrier', strokeLinecap: 'round', strokeLinejoin: 'round' }), el('g', { id: 'SVGRepo_iconCarrier' }, el('path', { d: 'M3 4L3 26L6 26L6 46L20 46L30 46L44 46L44 26L47 26L47 25L47 4L3 4 z M 5 6L45 6L45 24L43.167969 24 A 1.0001 1.0001 0 0 0 42.841797 24L32.548828 24L25 12.136719L17.451172 24L7.1542969 24 A 1.0001 1.0001 0 0 0 6.984375 23.986328 A 1.0001 1.0001 0 0 0 6.8398438 24L5 24L5 6 z M 25 15.863281L31.451172 26L42 26L42 44L30 44L30 35C30 32.250484 27.749516 30 25 30C22.250484 30 20 32.250484 20 35L20 44L8 44L8 26L18.548828 26L25 15.863281 z M 10 30L10 31L10 39L18 39L18 30L10 30 z M 32 30L32 31L32 39L40 39L40 30L32 30 z M 12 32L16 32L16 37L12 37L12 32 z M 25 32C26.668484 32 28 33.331516 28 35L28 44L22 44L22 35C22 33.331516 23.331516 32 25 32 z M 34 32L38 32L38 37L34 37L34 32 z' }))]),
        category: 'monotone-blocks',
        keywords: [],
        supports: {},
        attributes: {
            show_archive_link: {
                type: 'string',
                default: '',
            },
            archive_link_url: {
                type: 'object',
                default: {post_id: 0, url: '', title: '', 'post_type': null},
            }
        },
        example: { attributes: { show_archive_link: '', archive_link_url: {post_id: 0, url: '#', title: '', 'post_type': null} } },
        edit: function ( props ) {
            const blockProps = useBlockProps({});
            const setAttributes = props.setAttributes; 
            
            
            const innerBlocksProps = null;
            
            
            return el(Fragment, {}, [
                el('div', { ...blockProps }, [' ', ' ', el('ul', { className: 'cards group/list projects' }, [' ', ' ', el('li', { className: 'ease-in-out mb-12 lg:sticky lg:top-24 overlap-9' }, [' ', ' ', el('div', { className: 'group/card pb-1 relative transition-all sm:flex sm:gap-8' }, [' ', ' ', el('div', { className: '-inset-x-4 -inset-x-6 -inset-y-4 absolute block card-bg motion-reduce:transition-none transition z-0 md:rounded-md lg:group-hover/card:drop-shadow-lg' }, [' ', ' ']), ' ', el('div', { className: 'flex flex-col font-semibold mb-2 mt-1 sm:col-span-2 text-background-200 text-xs tracking-wide uppercase z-10', 'aria-label': '2024 to Present' }, [' ', el('span', { className: 'mb-1' }, '2024'), ' ', ' ', ' ']), ' ', ' ', el('div', { className: 'z-10 sm:w-8/12' }, [' ', el('header', {}, [' ', el('h3', { className: 'font-medium inline-block leading-snug' }, el('a', { className: 'group/link inline-flex items-center leading-tight', href: '#', 'aria-label': '' }, [el('span', { className: 'group-[.contrast]:border-b group-[.contrast]:border-dotted inline-block' }, 'StudioTwo'), el('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 20 20', fill: 'currentColor', className: 'inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px', 'aria-hidden': 'true' }, [' ', ' ', el('path', { fillRule: 'evenodd', d: 'M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z', clipRule: 'evenodd' }), ' ', ' '])])), ' ']), ' ', ' ', el('div', { className: 'mt-2 text-background-200 text-sm leading-normal' }, 'Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.'), ' ', ' ', el('footer', {}, [' ', el('ul', { className: 'mt-2 flex flex-wrap', 'aria-label': 'Technologies used' }, [' ', ' ', el('li', { className: 'mr-1.5 mt-2' }, [' ', el('a', { className: 'btn-outline flex font-medium hover:z-10 items-center leading-5 no-underline px-3 py-1 rounded-full text-xs' }, 'JavaScript'), ' ', ' ']), ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']), ' ']), ' ', ' ']), ' ', el('span', { href: '', className: 'absolute font-bold hidden object-contain right-0 text-background-200 text-right text-xs top-0 uppercase z-10 sm:group-hover/card:block' }, el('a', { href: '#', 'aria-label': 'Edit post', target: '_blank', className: 'inline-block' }, el('svg', { fill: 'currentColor', version: '1.1', id: 'Capa_1', xmlns: 'http://www.w3.org/2000/svg', xmlnsXlink: 'http://www.w3.org/1999/xlink', viewBox: '0 0 528.899 528.899', xmlSpace: 'preserve', 'preserveAspectRatio': '', width: '25', height: '25' }, [' ', ' ', el('g', { id: 'SVGRepo_bgCarrier', strokeWidth: '0' }), ' ', ' ', el('g', { id: 'SVGRepo_tracerCarrier', strokeLinecap: 'round', strokeLinejoin: 'round' }), ' ', ' ', el('g', { id: 'SVGRepo_iconCarrier' }, [' ', ' ', el('g', {}, [' ', ' ', el('path', { d: 'M328.883,89.125l107.59,107.589l-272.34,272.34L56.604,361.465L328.883,89.125z M518.113,63.177l-47.981-47.981 c-18.543-18.543-48.653-18.543-67.259,0l-45.961,45.961l107.59,107.59l53.611-53.611 C532.495,100.753,532.495,77.559,518.113,63.177z M0.3,512.69c-1.958,8.812,5.998,16.708,14.811,14.565l119.891-29.069 L27.473,390.597L0.3,512.69z' }), ' ', ' ']), ' ', ' ']), ' ', ' ']))), ' ', ' ']), ' ', ' ']), ' ', ' ', ' ']), ' ', props.attributes.show_archive_link && el('div', { className: 'mt-12' }, [' ', props.attributes.archive_link_url && props.attributes.archive_link_url.url && el('a', { className: 'font-medium group/link inline-flex items-center leading-tight relative text-base', href: props.attributes.archive_link_url.url, 'aria-label': 'View Full Résumé (opens in a new tab)', onClick: function(e) { e.preventDefault(); } }, ['View Blog ', el('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 20 20', fill: 'currentColor', className: 'inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px', 'aria-hidden': 'true' }, [' ', el('path', { fillRule: 'evenodd', d: 'M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z', clipRule: 'evenodd' }), ' '])]), ' ', ' ']), ' ', ' ']),                        
                
                    el( InspectorControls, {},
                        [
                            
                            el(Panel, {},
                                el(PanelBody, {
                                    title: __('Block properties')
                                }, [
                                    
                                    el(ToggleControl, {
                                        checked: props.attributes.show_archive_link === 'Yes',
                                        label: __( 'Show Archive Link' ),
                                        onChange: function(val) { setAttributes({show_archive_link: val ? 'Yes' : ''}) },
                                        help: __( '' ),
                                    }),
                                    pgUrlControl('archive_link_url', setAttributes, props, 'Archive Link', '', null ),    
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
