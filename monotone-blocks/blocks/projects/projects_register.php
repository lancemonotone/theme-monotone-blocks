<?php

        PG_Blocks_v2::register_block_type( array(
            'name' => 'monotone-blocks/projects',
            'title' => __( 'Projects', 'monotone_blocks' ),
            'icon' => '<svg fill="#000000" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M20.875 2C20.652344 2.023438 20.441406 2.125 20.28125 2.28125C19.652344 2.910156 19.367188 3.773438 19.46875 4.46875C19.570313 5.164063 19.917969 5.644531 20.15625 6.03125C20.394531 6.417969 20.511719 6.6875 20.53125 6.8125C20.550781 6.9375 20.601563 6.960938 20.28125 7.28125C19.882813 7.679688 19.882813 8.320313 20.28125 8.71875C20.679688 9.117188 21.320313 9.117188 21.71875 8.71875C22.347656 8.089844 22.632813 7.226563 22.53125 6.53125C22.429688 5.835938 22.082031 5.355469 21.84375 4.96875C21.605469 4.582031 21.488281 4.3125 21.46875 4.1875C21.449219 4.0625 21.398438 4.039063 21.71875 3.71875C22.042969 3.417969 22.128906 2.941406 21.933594 2.546875C21.742188 2.148438 21.308594 1.929688 20.875 2 Z M 25.875 2C25.652344 2.023438 25.441406 2.125 25.28125 2.28125C24.652344 2.910156 24.367188 3.773438 24.46875 4.46875C24.570313 5.164063 24.917969 5.644531 25.15625 6.03125C25.394531 6.417969 25.511719 6.6875 25.53125 6.8125C25.550781 6.9375 25.601563 6.960938 25.28125 7.28125C24.882813 7.679688 24.882813 8.320313 25.28125 8.71875C25.679688 9.117188 26.320313 9.117188 26.71875 8.71875C27.347656 8.089844 27.632813 7.226563 27.53125 6.53125C27.429688 5.835938 27.082031 5.355469 26.84375 4.96875C26.605469 4.582031 26.488281 4.3125 26.46875 4.1875C26.449219 4.0625 26.398438 4.039063 26.71875 3.71875C27.042969 3.417969 27.128906 2.941406 26.933594 2.546875C26.742188 2.148438 26.308594 1.929688 25.875 2 Z M 30.875 2C30.652344 2.023438 30.441406 2.125 30.28125 2.28125C29.652344 2.910156 29.367188 3.773438 29.46875 4.46875C29.570313 5.164063 29.917969 5.644531 30.15625 6.03125C30.394531 6.417969 30.511719 6.6875 30.53125 6.8125C30.550781 6.9375 30.601563 6.960938 30.28125 7.28125C29.882813 7.679688 29.882813 8.320313 30.28125 8.71875C30.679688 9.117188 31.320313 9.117188 31.71875 8.71875C32.347656 8.089844 32.632813 7.226563 32.53125 6.53125C32.429688 5.835938 32.082031 5.355469 31.84375 4.96875C31.605469 4.582031 31.488281 4.3125 31.46875 4.1875C31.449219 4.0625 31.398438 4.039063 31.71875 3.71875C32.042969 3.417969 32.128906 2.941406 31.933594 2.546875C31.742188 2.148438 31.308594 1.929688 30.875 2 Z M 23 10C18.394531 10 15.566406 10.367188 13.75 11C12.84375 11.316406 12.164063 11.695313 11.6875 12.21875C11.210938 12.742188 11 13.414063 11 14C11 15.269531 11.601563 15.980469 12 16.375L12 20.0625C7.523438 20.570313 4 24.394531 4 29L4 43C4 43.550781 4.449219 44 5 44L6.28125 44L7.0625 46.3125C7.195313 46.71875 7.574219 46.996094 8 47L11 47C11.425781 46.996094 11.804688 46.71875 11.9375 46.3125L12.71875 44L37.28125 44L38.0625 46.3125C38.195313 46.71875 38.574219 46.996094 39 47L42 47C42.425781 46.996094 42.804688 46.71875 42.9375 46.3125L43.71875 44L45 44C45.550781 44 46 43.550781 46 43L46 34L49 34C49.550781 34 50 33.550781 50 33L50 32C50 30.355469 48.644531 29 47 29L46 29C46 25.109375 43.480469 21.777344 40 20.53125L40 16.375C40.421875 15.960938 41 15.261719 41 14C41 13.421875 40.753906 12.761719 40.28125 12.25C39.808594 11.738281 39.15625 11.355469 38.25 11.03125C36.4375 10.382813 33.609375 10 29 10C28.398438 10 27.804688 9.992188 27.25 10C26.851563 10.007813 26.488281 10.03125 26.125 10.0625C25.183594 10.015625 24.152344 10 23 10 Z M 23 12C24.078125 12 25.03125 12.019531 25.90625 12.0625L25.90625 12.09375C25.988281 12.085938 26.101563 12.070313 26.1875 12.0625C28.796875 12.203125 30.527344 12.535156 31.5625 12.90625C32.269531 13.15625 32.644531 13.441406 32.8125 13.625C32.980469 13.808594 33 13.875 33 14C33 14.789063 32.4375 15.1875 32.4375 15.1875L32 15.46875L32 20L14 20L14 15.53125L13.625 15.21875C13.625 15.21875 13 14.644531 13 14C13 13.835938 13.023438 13.742188 13.1875 13.5625C13.351563 13.382813 13.703125 13.121094 14.40625 12.875C15.816406 12.382813 18.503906 12 23 12 Z M 34.28125 12.25C35.753906 12.414063 36.832031 12.644531 37.5625 12.90625C38.269531 13.15625 38.644531 13.441406 38.8125 13.625C38.980469 13.808594 39 13.875 39 14C39 14.789063 38.4375 15.1875 38.4375 15.1875L38 15.46875L38 20.0625C37.667969 20.023438 37.34375 20 37 20L34 20L34 19C34.550781 19 35 18.550781 35 18C35 17.449219 34.550781 17 34 17L34 16.375C34.421875 15.960938 35 15.261719 35 14C35 13.421875 34.753906 12.761719 34.28125 12.25 Z M 28 14C27.449219 14 27 14.449219 27 15C27 15.550781 27.449219 16 28 16C28.550781 16 29 15.550781 29 15C29 14.449219 28.550781 14 28 14 Z M 18 15C17.449219 15 17 15.449219 17 16C17 16.550781 17.449219 17 18 17C18.550781 17 19 16.550781 19 16C19 15.449219 18.550781 15 18 15 Z M 22.5 16C21.671875 16 21 16.671875 21 17.5C21 18.328125 21.671875 19 22.5 19C23.328125 19 24 18.328125 24 17.5C24 16.671875 23.328125 16 22.5 16 Z M 26.5 18C26.222656 18 26 18.222656 26 18.5C26 18.777344 26.222656 19 26.5 19C26.777344 19 27 18.777344 27 18.5C27 18.222656 26.777344 18 26.5 18 Z M 13 22L37 22C40.855469 22 44 25.144531 44 29L44 42L6 42L6 29C6 25.144531 9.144531 22 13 22 Z M 46 31L47 31C47.554688 31 48 31.445313 48 32L46 32 Z M 39 34C37.355469 34 36 35.355469 36 37C36 38.644531 37.355469 40 39 40C40.644531 40 42 38.644531 42 37C42 35.355469 40.644531 34 39 34 Z M 39 36C39.5625 36 40 36.4375 40 37C40 37.5625 39.5625 38 39 38C38.4375 38 38 37.5625 38 37C38 36.4375 38.4375 36 39 36 Z M 8.375 44L10.625 44L10.28125 45L8.71875 45 Z M 39.375 44L41.625 44L41.28125 45L39.71875 45Z"></path></g></svg>',
            'category' => 'monotone-blocks',
            'render_template' => 'blocks/projects/projects.php',
            'supports' => array(),
            'base_url' => get_template_directory_uri(),
            'base_path' => get_template_directory(),
            'js_file' => 'blocks/projects/projects.js',
            'attributes' => array(

            ),
            'example' => array(

            ),
            'dynamic' => true,
            'version' => '1.0.332'
        ) );
