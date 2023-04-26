# LP (Landing Pages) UI KIT

To use it, you must go to "app.module.ts"
    import { UiKitModule } from 'src/shared/ui-kit.module';
    @NgModule({ 
    	@NgModule({
            
          declarations: [],

          imports: [
    -->      UiKitModule
          ],
    })


We can found:

# BUTTONS
    <lp-button> #TEXT, IMG, ETC </lp-button>
    
    "lp-buttons" can receive props like:

        Type: "button" | "menu" | "reset" | "submit" | "close"
            DEFAULT TO "submit";
                <lp-button> #TEXT, IMG, ETC </lp-button>

            CORRECT WAY TO USE
                <lp-button [Type]="'button'"> #TEXT, IMG, ETC </lp-button>
--------------------------------------------------------------------------------------
        Style: "basic" | "outlined" | "cta" | "cta-outlined" | "3D"
            DEFAULT TO "basic"

            CORRECT WAY TO USE
                <lp-button [Style]="'basic'"> #TEXT, IMG, ETC </lp-button>
--------------------------------------------------------------------------------------
        Height: string
            DEFAULT TO "46px"

            CORRECT WAY TO USE
                <lp-button [Height]="'46px'"> #TEXT, IMG, ETC </lp-button>
--------------------------------------------------------------------------------------
        Width: string
            DEFAULT TO "100%"

            CORRECT WAY TO USE
                <lp-button [Width]="'100%'"> #TEXT, IMG, ETC </lp-button>
--------------------------------------------------------------------------------------
        Font_Size: string
            DEFAULT TO "16px"

            CORRECT WAY TO USE
                <lp-button [Font_Size]="'16px'"> #TEXT, IMG, ETC </lp-button>
--------------------------------------------------------------------------------------
        Disabled: boolean
            DEFAULT TO false
                                    
            CORRECT WAY TO USE
                <lp-button [Disabled]="true"> #TEXT, IMG, ETC </lp-button>
--------------------------------------------------------------------------------------
        Icon: string         // IT SHOULD BE AN SVG, RECOMMENDED TO EXPORT IT IN FIGMA
            DEFAULT TO ""
                                    
            CORRECT WAY TO USE
                <lp-button [Icon]="image.svg"> #TEXT, IMG, ETC </lp-button>
--------------------------------------------------------------------------------------
        Icon_Position: "left" | "right"
            DEFAULT TO "left"
                        
            CORRECT WAY TO USE
                <lp-button [Loading]="true"> #TEXT, IMG, ETC </lp-button>
--------------------------------------------------------------------------------------
        Loading: boolean
            DEFAULT TO false
            
            CORRECT WAY TO USE
                <lp-button [Loading]="true"> #TEXT, IMG, ETC </lp-button>
--------------------------------------------------------------------------------------

# LOADER
    <lp-loader></lp-loader>

    "lp-loader" can receive props like:

        Size: string 
            DEFAULT TO "25px"
            
            CORRECT WAY TO USE
                <lp-loader [Style]="'25px'"></lp-loader>
--------------------------------------------------------------------------------------
        Color: string
            DEFAULT TO "#fff"
            
            CORRECT WAY TO USE
                <lp-loader [Color]="'#fff'"></lp-loader>
--------------------------------------------------------------------------------------
# ICONS
    <lp-icon></lp-icon>

    "lp-icon" can receive props like: 

        Icon: 	| "x" | "chevron-down" | "chevron-right" | "coins" | "delivery" | "delivery-2" 
                | "error-circled" |  "government-capitol" | "heart" | "image" | "invalid-email" 
                | "invalid-zip-code" | "like" | "lock" | "message-call" | "mobile" |  "monitor" 
                | "mouse" | "notepad" | "paper" | "person" | "shopping-cart" | "star" | "verify" 
                | "wifi"  | "error" | "success" | "warning" | "arrow-left" | "arrow-right" 
		        | "bank-government" | "callout" | "check" |
            
            DEFAULT TO "x"
                <lp-icon [Icon]="'x'"></lp-icon>
--------------------------------------------------------------------------------------
    	Width: string 
            DEFAULT TO "26px";

            CORRECT WAY TO USE
                <lp-icon [Width]="'26px'"></lp-icon>
--------------------------------------------------------------------------------------
    	Height: string 
            DEFAULT TO "26px";
            
            CORRECT WAY TO USE
                <lp-icon [Height]="'26px'"></lp-icon>
--------------------------------------------------------------------------------------
	    Color: "white" | "gray" | "orange" | "light-gray" 
            DEFAULT TO "gray";
            
            CORRECT WAY TO USE
                <lp-icon [Color]="'white'"></lp-icon>
--------------------------------------------------------------------------------------

# INPUT
    <lp-input></lp-input>
    
    "lp-icon" can receive props like: 
        Label: string
            DEFAULT TO ""
            
            CORRECT WAY TO USE
                <lp-input [Label]="'<Your Label>'"></lp-input>
--------------------------------------------------------------------------------------
        Type: "text" | "number" | "date"
            DEFAULT TO "text"

            CORRECT WAY TO USE
                <lp-input [Type]="'text'"></lp-input>
--------------------------------------------------------------------------------------
        Name: string
            DEFAULT TO ""
            
            CORRECT WAY TO USE
                <lp-input [Name]="'< Your Name >'"></lp-input>
--------------------------------------------------------------------------------------
        Id: string
            DEFAULT TO ""
                        
            CORRECT WAY TO USE
                <lp-input [Name]="'< Your Id >'"></lp-input>
--------------------------------------------------------------------------------------
        Placeholder: string
            DEFAULT TO ""
                                    
            CORRECT WAY TO USE
                <lp-input [Placeholder]="'< Your Placeholder >'"></lp-input>
--------------------------------------------------------------------------------------
        Disabled: boolean
            DEFAULT TO false
                                    
            CORRECT WAY TO USE
                <lp-input [Disabled]="true"></lp-input>
--------------------------------------------------------------------------------------
        FormControl: FormControl

            CORRECT WAY TO USE 
                <lp-input [FormControl]="$any(< group >.get( < fieldname > ))"></lp-input>
--------------------------------------------------------------------------------------
        FormControlName: string
            DEFAULT TO ""

            CORRECT WAY TO USE 
                <lp-input [FormControlName]="' < Your FormControlName > '"></lp-input>
--------------------------------------------------------------------------------------
        Errors: boolean
            DEFAULT TO false
            
            CORRECT WAY TO USE 
                <lp-input [Errors]=" true "></lp-input>
--------------------------------------------------------------------------------------
        ErrorMsg: string
            DEFAULT TO ""
            
            CORRECT WAY TO USE 
                <lp-input [ErrorMsg]="' < Your ErrorMsg > '"></lp-input>
-------------------------------------------------------------------------------
        Width: string
            DEFAULT TO "100%"
                        
            CORRECT WAY TO USE 
                <lp-input [Width]="'100%'"></lp-input>
-------------------------------------------------------------------------------
        Height: string
            DEFAULT TO "42px"
                        
            CORRECT WAY TO USE 
                <lp-input [Height]="'42px'"></lp-input>
-------------------------------------------------------------------------------
        Change: Event Emitter

            CORRECT WAY TO USE => This will send string | number
                <lp-input (Change)="<your function>($event)"></lp-input>                
-------------------------------------------------------------------------------

# SELECT 
    <lp-select></lp-select>
    
    "lp-icon" can receive props like: 
--------------------------------------------------------------------------------------
        Label: string
            DEFAULT TO ""
            
            CORRECT WAY TO USE
                <lp-select [Label]="'<Your Label>'"></lp-select>
--------------------------------------------------------------------------------------
        Id: string
            DEFAULT TO ""
                        
            CORRECT WAY TO USE
                <lp-select [Name]="'< Your Id >'"></lp-select>
--------------------------------------------------------------------------------------
        Placeholder: string
            DEFAULT TO ""
                                    
            CORRECT WAY TO USE
                <lp-select [Placeholder]="'< Your Placeholder >'"></lp-select>
--------------------------------------------------------------------------------------
        Disabled: boolean
            DEFAULT TO false
                                    
            CORRECT WAY TO USE
                <lp-select [Disabled]="true"></lp-select>
--------------------------------------------------------------------------------------
        FormControl: FormControl

            CORRECT WAY TO USE 
                <lp-select [FormControl]="$any(< group >.get( < fieldname > ))">
                </lp-select>
--------------------------------------------------------------------------------------
        FormControlName: string
            DEFAULT TO ""

            CORRECT WAY TO USE 
                <lp-select [FormControlName]="' < Your FormControlName > '">
                </lp-select>
--------------------------------------------------------------------------------------
        Errors: boolean
            DEFAULT TO false
            
            CORRECT WAY TO USE 
                <lp-select [Errors]=" true "></lp-select>
--------------------------------------------------------------------------------------
        ErrorMsg: string
            DEFAULT TO ""
            
            CORRECT WAY TO USE 
                <lp-select [ErrorMsg]="' < Your ErrorMsg > '"></lp-select>
--------------------------------------------------------------------------------------
        Width: string
            DEFAULT TO "100%"
                        
            CORRECT WAY TO USE 
                <lp-select [Width]="'100%'"></lp-select>
--------------------------------------------------------------------------------------
        Height: string
            DEFAULT TO "42px"
                        
            CORRECT WAY TO USE 
                <lp-select [Height]="'42px'"></lp-select>
--------------------------------------------------------------------------------------
        Options: { label: string; value: string }[]
            DEFAULT TO "42px"
                        
            CORRECT WAY TO USE 
                <lp-select [Options]="[ { label: 'Option1', value: 'Value1' } ]">
                </lp-select>
--------------------------------------------------------------------------------------             
        Change: Event Emitter

            CORRECT WAY TO USE => This will send string | number
                <lp-select (Change)="<your function>($event)"></lp-select>                
--------------------------------------------------------------------------------------

# MODAL
    <lp-modal></lp-modal>

    "lp-modal" can receive props like: 
--------------------------------------------------------------------------------------
        Show_Modal: boolean
            DEFAULT TO false
                        
            CORRECT WAY TO USE 
                <lp-select [Show?Modal]="true"></lp-select>

# ZIP MODAL
    <lp-zip-modal></lp-zip-modal>

    "lp-zip-modal" can receive props like: 
    	@Output() Close_Modal = new EventEmitter();
--------------------------------------------------------------------------------------
        Show_Modal: boolean
            DEFAULT TO false
                        
            CORRECT WAY TO USE 
                <lp-select [Show_Modal]="true"></lp-select>
--------------------------------------------------------------------------------------
        Zip_Code: number
            DEFAULT TO -1
                        
            CORRECT WAY TO USE 
                <lp-select [Zip_Code]="12345"></lp-select>
--------------------------------------------------------------------------------------
        Submit: Event Emitter

            CORRECT WAY TO USE => This will send string | number
                <lp-select (Submit)="<your function>($event)"></lp-select>            
--------------------------------------------------------------------------------------
        Close_Modal: Event Emitter

            CORRECT WAY TO USE => This will send string | number
                <lp-select (Close_Modal)="<your function>()"></lp-select>            