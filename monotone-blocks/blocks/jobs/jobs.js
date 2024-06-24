
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
    
    const block = registerBlockType( 'monotone-blocks/jobs', {
        apiVersion: 2,
        title: 'Jobs',
        description: '',
        icon: el('svg', { fill: '#000000', viewBox: '0 0 1920 1920', xmlns: 'http://www.w3.org/2000/svg' }, [el('g', { id: 'SVGRepo_bgCarrier', strokeWidth: '0' }), el('g', { id: 'SVGRepo_tracerCarrier', strokeLinecap: 'round', strokeLinejoin: 'round' }), el('g', { id: 'SVGRepo_iconCarrier' }, [' ', el('path', { d: 'M1920 1546.993v106.666H533.341v-106.666H1920ZM357.651 442.668l304.425 304.319-304.425 304.318-75.306-75.306 175.572-175.68h-351.25v853.33H0V693.653h457.917L282.345 518.08l75.306-75.413ZM1920 1120.222v106.773H533.341v-106.773H1920Zm-853.329-426.558V800.33H853.34V693.664h213.332Zm426.665 0V800.33h-213.332V693.664h213.332Zm426.664 0V800.33h-213.332V693.664H1920ZM1920 267v106.666H533.341V267H1920Z', fillRule: 'evenodd' }), ' '])]),
        category: 'monotone-blocks',
        keywords: [],
        supports: {},
        attributes: {
            show_resume_link: {
                type: 'string',
                default: '',
            },
            resume_link_url: {
                type: 'object',
                default: {post_id: 0, url: '', title: '', 'post_type': null},
            }
        },
        example: { attributes: { show_resume_link: '', resume_link_url: {post_id: 0, url: '#', title: '', 'post_type': null} } },
        edit: function ( props ) {
            const blockProps = useBlockProps({});
            const setAttributes = props.setAttributes; 
            
            
            const innerBlocksProps = null;
            
            
            return el(Fragment, {}, [
                el('div', { ...blockProps }, [' ', ' ', el('ol', { className: 'cards group/list jobs lg:snap-mandatory lg:snap-y' }, [' ', ' ', el('li', { className: 'ease-in-out mb-12 overlap-9 lg:snap-start lg:sticky lg:top-24' }, [' ', ' ', el('div', { className: 'grid group/card md:gap-4 pb-1 relative sm:gap-8 sm:grid-cols-12 transition-all' }, [' ', ' ', el('div', { className: '-inset-x-4 -inset-x-6 -inset-y-4 absolute block card-bg motion-reduce:transition-none transition z-0 md:rounded-md lg:group-hover/card:drop-shadow-lg' }, [' ', ' ']), ' ', ' ', el('div', { className: 'flex flex-col font-semibold mb-2 mt-1 text-background-200 text-center text-xs tracking-wide uppercase z-10 sm:col-span-2', 'aria-label': '2024 to Present' }, [' ', ' ', el('div', { className: 'h-fit mb-2 mt-1 overflow-hidden z-10' }, [' ', el('php', {}), ' ', ' ']), ' ', el('span', { className: 'mb-1' }, '2024'), ' ', el('span', {}, 'Present'), ' ', ' ']), ' ', ' ', el('div', { className: 'sm:col-span-9 z-10' }, [' ', el('header', {}, [' ', el('h3', { className: 'font-medium inline-block leading-snug' }, el('div', {}, [' ', el('span', {}, 'StudioTwo'), ' · ', ' '])), el('a', { className: 'font-medium group/link inline-flex items-center leading-tight text-sm', href: '#', target: '_blank', rel: 'noreferrer noopener', 'aria-foo': 'Start', 'aria-label': '' }, [el('span', { className: 'group-[.contrast]:border-b group-[.contrast]:border-dotted inline-block' }, 'StudioTwo'), el('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 20 20', fill: 'currentColor', className: 'inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px', 'aria-hidden': 'true' }, [' ', ' ', el('path', { fillRule: 'evenodd', d: 'M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z', clipRule: 'evenodd' }), ' ', ' '])]), ' ']), ' ', ' ', el('div', { className: 'mt-2 text-background-200 text-sm leading-normal' }, 'Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.'), ' ', ' ', el('footer', {}, [' ', el('ul', { className: 'mt-2 flex flex-wrap', 'aria-label': 'Technologies used' }, [' ', ' ', el('li', { className: 'mr-1.5 mt-2' }, [' ', el('a', { className: 'btn-outline flex font-medium hover:z-10 items-center leading-5 no-underline px-3 py-1 rounded-full text-xs' }, 'JavaScript'), ' ', ' ']), ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']), ' ']), ' ', ' ']), ' ', el('span', { href: '', className: 'font-bold hidden group-hover/card:block text-background-200 text-right text-xs uppercase z-10' }, el('a', { href: '#', 'aria-label': 'Edit post', target: '_blank', className: 'inline-block' }, el('svg', { fill: 'currentColor', version: '1.1', id: 'Capa_1', xmlns: 'http://www.w3.org/2000/svg', xmlnsXlink: 'http://www.w3.org/1999/xlink', viewBox: '0 0 528.899 528.899', xmlSpace: 'preserve', 'preserveAspectRatio': '', width: '25', height: '25' }, [' ', ' ', el('g', { id: 'SVGRepo_bgCarrier', strokeWidth: '0' }), ' ', ' ', el('g', { id: 'SVGRepo_tracerCarrier', strokeLinecap: 'round', strokeLinejoin: 'round' }), ' ', ' ', el('g', { id: 'SVGRepo_iconCarrier' }, [' ', ' ', el('g', {}, [' ', ' ', el('path', { d: 'M328.883,89.125l107.59,107.589l-272.34,272.34L56.604,361.465L328.883,89.125z M518.113,63.177l-47.981-47.981 c-18.543-18.543-48.653-18.543-67.259,0l-45.961,45.961l107.59,107.59l53.611-53.611 C532.495,100.753,532.495,77.559,518.113,63.177z M0.3,512.69c-1.958,8.812,5.998,16.708,14.811,14.565l119.891-29.069 L27.473,390.597L0.3,512.69z' }), ' ', ' ']), ' ', ' ']), ' ', ' ']))), ' ', ' ']), ' ', ' ']), ' ', ' ', ' ']), ' ', ' ', props.attributes.show_resume_link && el('div', { className: 'mt-12' }, [' ', props.attributes.resume_link_url && props.attributes.resume_link_url.url && el('a', { className: 'font-medium group/link inline-flex items-center leading-tight relative text-base', href: props.attributes.resume_link_url.url, 'aria-label': 'View Full Résumé (opens in a new tab)', rel: 'noreferrer noopener', onClick: function(e) { e.preventDefault(); } }, ['View Full Résumé ', el('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 20 20', fill: 'currentColor', className: 'inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px', 'aria-hidden': 'true' }, [' ', ' ', el('path', { fillRule: 'evenodd', d: 'M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z', clipRule: 'evenodd' }), ' ', ' '])]), ' ', ' ']), ' ', ' ']),                        
                
                    el( InspectorControls, {},
                        [
                            
                            el(Panel, {},
                                el(PanelBody, {
                                    title: __('Block properties')
                                }, [
                                    
                                    el(ToggleControl, {
                                        checked: props.attributes.show_resume_link === 'Yes',
                                        label: __( 'Show Resume Link' ),
                                        onChange: function(val) { setAttributes({show_resume_link: val ? 'Yes' : ''}) },
                                        help: __( '' ),
                                    }),
                                    pgUrlControl('resume_link_url', setAttributes, props, 'Résumé Link', '', null ),    
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
