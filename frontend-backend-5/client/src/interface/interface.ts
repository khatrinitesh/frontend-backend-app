export interface BannerProps{
    title:string;
    desc:string;
}

export interface HeaderProps{
    label:string;
    url:string;
}

export type BtnPrimaryProps{
    label:string;
    onClick:() => void;
}

export interface Bullet{
    type:'success' | 'warning' | 'danger',
    status:boolean,
    title:string;
}

// Interface for individual search results
export interface SearchResult {
    id: number;
    title: string;
    description?: string;
  }
  
  // Interface for search state
  export interface SearchState {
    query: string;
    results: SearchResult[];
    isLoading: boolean;
  }
  
  // Interface for search props
  export interface SearchProps {
    placeholder?: string;
  }

  export interface Item{
    id:number;
    name:string;
    description:string;
  }

  export interface AnimatedListProps{
    items:Item[];
    animationDuration?:number; // Optional animation duration in milliseconds
  }

  export interface Arrow{
    id:number;
    direction:'left' | 'right' | 'up' | 'down';
    label:string;
  }

  export interface ArrowProps{
    arrows:Arrow[];
    onArrowClick?:(direction:Arrow['direction']) => void; // Optional callback for arrow clicks
  }

  // Interface for aspect ratio
export interface AspectRatio {
  id: number;
  ratio: string; // e.g., "16:9", "4:3"
  description: string;
}

// Interface for aspect ratio component props
export interface AspectRatioProps {
  aspectRatios: AspectRatio[];
  selectedRatioId?: number; // ID of the currently selected aspect ratio
  onRatioSelect?: (id: number) => void; // Callback for when a ratio is selected
}

// Interface for an autocomplete suggestion
export interface AutocompleteOption {
  id: number;
  label: string; // Text to be displayed in the dropdown
}

export interface AutocompleteProps {
  options: AutocompleteOption[];
  onSelect?: (option: AutocompleteOption) => void; // Optional callback when an option is selected
}

export interface Avatar{
  id:number;
  src:string;
  alt:string;
  size?:number;
}

export interface AvatarProps{
  avatar:Avatar[];
  onClick?:() => void; // optional click handler
}

export type Color = 'red' | 'blue' | 'yellow' | 'green'

export type ButtonProps{
  style:React.CSSProperties;
  onClick:(test:string) => void;
}