import { Arrow, AspectRatio, AutocompleteOption, Avatar, HeaderProps, Item } from "../interface/interface";

export const headerData:HeaderProps[] = [
    {label:'home',url:'/'},
    {label:'about',url:'/about'},
    {label:'service',url:'/service'},
    {label:'product',url:'/product'},
    {label:'contact',url:'/contact'},
]

export const BULLETS:Bullet[] = [
    {
        type: 'success',
        status: true,
        title: 'Task Completed Successfully'
      },
      {
        type: 'warning',
        status: false,
        title: 'Task is In Progress'
      },
      {
        type: 'danger',
        status: false,
        title: 'Task Failed'
      },
      {
        type: 'success',
        status: true,
        title: 'Data Saved Successfully'
      },
      {
        type: 'warning',
        status: true,
        title: 'Updates Available'
      },
      {
        type: 'danger',
        status: true,
        title: 'Critical Error Encountered'
      }
]

export const DEFAULT_PLACEHOLDER = 'Search...';

// Example search results
export const EXAMPLE_RESULTS: SearchResult[] = [
  { id: 1, title: 'First Result', description: 'This is the first result' },
  { id: 2, title: 'Second Result', description: 'This is the second result' },
  // Add more example results as needed
];

export const DEFAULT_ITEMS:Item[] = [
    { id: 1, name: 'Item 1', description: 'Description for Item 1' },
  { id: 2, name: 'Item 2', description: 'Description for Item 2' },
  { id: 3, name: 'Item 3', description: 'Description for Item 3' }
]

export const DEFAULT_ARROWS:Arrow[] = [
  { id: 1, direction: 'left', label: 'Left Arrow' },
  { id: 2, direction: 'right', label: 'Right Arrow' },
  { id: 3, direction: 'up', label: 'Up Arrow' },
  { id: 4, direction: 'down', label: 'Down Arrow' }
]

export const DEFAULT_ASPECT_RATIOS: AspectRatio[] = [
  { id: 1, ratio: '16:9', description: '16:9 - Widescreen' },
  { id: 2, ratio: '4:3', description: '4:3 - Standard' },
  { id: 3, ratio: '1:1', description: '1:1 - Square' },
  { id: 4, ratio: '21:9', description: '21:9 - Ultra Widescreen' }
];
// Example autocomplete options
export const DEFAULT_OPTIONS: AutocompleteOption[] = [
  { id: 1, label: 'Apple' },
  { id: 2, label: 'Banana' },
  { id: 3, label: 'Cherry' },
  { id: 4, label: 'Date' },
  { id: 5, label: 'Elderberry' },
  { id: 6, label: 'Fig' },
  { id: 7, label: 'Grape' }
];

export const DEFAULT_AVATAR:Avatar[] = {
  id:1,
  src:'https://via.placeholder.com/150',
  alt:'Default avatar',
  size:50, // default size in pixels
}