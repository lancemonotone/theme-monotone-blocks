
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
    
    const block = registerBlockType( 'monotone-blocks/site-header', {
        apiVersion: 2,
        title: 'Site Header',
        description: '',
        icon: el('svg', { fill: '#000000', viewBox: '0 0 1920 1920', xmlns: 'http://www.w3.org/2000/svg' }, [el('g', { id: 'SVGRepo_bgCarrier', strokeWidth: '0' }), el('g', { id: 'SVGRepo_tracerCarrier', strokeLinecap: 'round', strokeLinejoin: 'round' }), el('g', { id: 'SVGRepo_iconCarrier' }, [' ', el('path', { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M0 213.333C0 95.5126 95.5126 0 213.333 0H1706.67C1824.49 0 1920 95.5126 1920 213.333V1706.67C1920 1824.49 1824.49 1920 1706.67 1920H213.333C95.5126 1920 0 1824.49 0 1706.67V213.333ZM213.333 106.667C154.423 106.667 106.667 154.423 106.667 213.333V1706.67C106.667 1765.58 154.423 1813.33 213.333 1813.33H1706.67C1765.58 1813.33 1813.33 1765.58 1813.33 1706.67V213.333C1813.33 154.423 1765.58 106.667 1706.67 106.667H213.333ZM266.667 746.667C237.211 746.667 213.333 722.788 213.333 693.333V373.333C213.333 343.878 237.211 320 266.667 320H1653.33C1682.79 320 1706.67 343.878 1706.67 373.333V693.333C1706.67 722.788 1682.79 746.667 1653.33 746.667H266.667ZM346.667 426.667C331.939 426.667 320 438.606 320 453.333V613.333C320 628.061 331.939 640 346.667 640H1573.33C1588.06 640 1600 628.061 1600 613.333V453.333C1600 438.606 1588.06 426.667 1573.33 426.667H346.667Z' }), ' '])]),
        category: 'monotone-blocks',
        keywords: [],
        supports: {},
        attributes: {
        },
        example: { attributes: {  } },
        edit: function ( props ) {
            const blockProps = useBlockProps({ className: 'lg:flex lg:flex-col lg:justify-between lg:max-h-screen lg:py-24 lg:sticky lg:top-0 lg:w-1/2', 'data-pg-name': 'Site Header' });
            const setAttributes = props.setAttributes; 
            
            
            const innerBlocksProps = null;
            
            
            return el(Fragment, {}, [
                el('header', { ...blockProps }, [' ', el('div', {}, [' ', el('a', { href: 'http://lancemonotone.local', className: 'no-underline text-blue' }, el('h1', { className: 'font-bold inline-block mb-5 text-4xl sm:text-5xl' }, 'Rus Miller')), ' ', ' ', el('h2', { className: 'uppercase', 'data-pg-class-style': 'h2' }, 'Senior Full-Stack WordPress Engineer'), ' ', ' ', el('div', { className: 'mt-4 max-w-xs leading-normal' }, [' ', el('p', {}, 'I design and develop digital experiences that are beautiful and functional, ensuring that every user can easily navigate and enjoy them.'), ' ']), ' ', ' ', el('nav', { className: 'nav hidden lg:block', 'aria-label': 'In-page jump links' }, [' ', ' ', el('ul', { className: 'mt-16 w-max', 'data-pg-name': 'Jump Links', id: 'jump-links' }, [' ', ' ', el('li', {}, [el('a', { className: 'flex group/nav-item items-center no-underline py-3', href: '#about' }, [el('span', { className: 'group-[.active]/nav-item:w-16 group-focus-visible/nav-item:w-16 group-hover/nav-item:w-16 h-px motion-reduce:transition-none mr-4 nav-indicator transition-all w-8' }), el('span', { className: 'font-bold group-[.active]/nav-item:text-background-900 group-focus-visible:text-background-900 group-hover:text-background-900 nav-text text-xs tracking-widest uppercase' }, 'About')]), ' ', ' ']), ' ', ' ', el('li', {}, [el('a', { className: 'no-underline group flex items-center py-3 active', href: '#experience' }, [el('span', { className: 'nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none' }), el('span', { className: 'font-bold group-focus-visible:text-background-900 group-hover:text-background-900 nav-text text-xs tracking-widest uppercase' }, 'Experience')]), ' ', ' ']), ' ', ' ', el('li', {}, [el('a', { className: 'no-underline group flex items-center py-3', href: '#projects' }, [el('span', { className: 'nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none' }), el('span', { className: 'font-bold group-focus-visible:text-background-900 group-hover:text-background-900 nav-text text-xs tracking-widest uppercase' }, 'Projects')]), ' ', ' ']), ' ', el('li', {}, [el('a', { className: 'no-underline group flex items-center py-3', href: '#blog' }, [el('span', { className: 'nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none' }), el('span', { className: 'font-bold group-focus-visible:text-background-900 group-hover:text-background-900 nav-text text-xs tracking-widest uppercase' }, 'Blog')]), ' ', ' ']), ' ', ' ']), ' ', ' ']), ' ', ' ']), ' ', el('ul', { className: 'ml-1 mt-8 flex items-center', 'aria-label': 'Social media' }, [' ', ' ', ' ', ' ', ' ', ' ', ' ']), ' ']),                        
                
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
