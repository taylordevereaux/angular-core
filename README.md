# angular-core template
A template for asp.net core 2.2 API and Angular 7

# TypeGen C# to TypeScript Generator

We have a process to automatically create the Typescript models from our C# models. The process requires that we have the dotnet tools installed globally. To install the tools run the following command from your command line:

```
 dotnet tool install -g TypeGen.DotNetCli --version 2.3.1
```
When the project builds it will automatically take all models that contain the proper class attributes and generate the associated typescript models.

An example of attributes:
```c#
[ExportTsInterface]
public class UserLoginModel
{
    ...
}
```
For more information refer to the documentation: https://typegen.readthedocs.io/en/latest/attributes.html


# Mapping Profiles (Data to Model, Model to Data)

Passing data from the server to the client from the api should always go through transfer Models and never using the data models directly. To get the data from the data models to the transfer models we will always use the **AutoMapper**. All mapping should be configured in the `./Mapper/MappingProfile.cs`

## Basic 
Basic fields will map automatically if they're named the same. Ex:
```C#
public class User 
{
    public string FirstName { get; set; }
}
```
```C#
public class UserModel
{
    public string FirstName { get; set; }
}
```

Mapping Profile:
```c#
CreateMap<User, UserModel>().ReverseMap();
```

`.ReverseMap();` tells the mapper to do the reverse mapping for `UserModel` and `User`.

# Localization (Angular)

All content of the website should be localized.

## Structure

The localization files are located under `/src/assets/i18n/[lang].json` where `[lang]` is the language code (ex: `en-CA`, `fr-CA`).
The json file must adhere to the following structure:
```json 
{
    "Global": {
        "<GlobalKey>": "<Localized text>"
    },
    "<Feature>": {
        "<FeatureKey>": "<Localized text>",
        "<AnotherFeatureKey>": "<More localized text>"
    },
    "<Feature2>": {
        "<FeatureKey>": "<localized text>",

        "<SubFeature>": {
            "<SubFeatureKey>": "<Localized text>",
            "<AnotherSubFeatureKey>": "<More localized text>"
        }
    }
}
```
### Global
The `Global` grouping is used to store all localized text that will be reusable throughout the application. Not tied to a single feature.

### Features
Each `feature` should have its own grouping following the `Global` group. The features can have their own localized text or contain `SubFeature` groupings with their own localized text and so on...

### Example
```json
{
    "Global": {
        "Hello": "Hello {{firstname}}",
        "Save": "Save",
        "Cancel": "Cancel"
    },
    "Admin": {
        // Sub Features
        "SalesOverview": {
            "Title": "Sales Overview"
        },
        "Profile": {
            "Title": "Admin Profile"
        }
    },
    "Dashboard": {
        "Title": "Dashboard",
        // Sub Features
        "Widgets": {
            "Sales": "Sales",
            "Throughput": "Throughput"
        }
    }
}
```

## Usage (Html)

To use translated text you need to follow the hierarchy of the `[lang].json` file. 
An example on the dashboard might be:
```html
<h1>{{ 'Dashboard.Title' | translate }}</h1>
```
Here it will look for the `Dashboard.Title` key in the json file. The `|` tells angular that this key is a translation key and should be retrieved from the `[lang].json` file.

**Formatted Strings**

You can also format translated strings by passing an object with the keys matching the format name. From an example above we have the following localization key:
```json
{
    "Global": {
        "Hello": "Hello {{username}}"
    }
}
```
To pass the `username` to the translation there is two options. 
You define the parameters directly in the template, where `this.username` is a property defined on the `Component`.
```html
<p>
  {{ 'Global.Hello' | translate:{ username: this.username} }}
</p>
```
Or, you can define this object in the `Component` (useful if there are more than one items to pass).

**Component**
```ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public param: string;
  ngOnInit() {
    this.param = { username: 'john.doe' };
  }
}
```
**Template**
```html
<p>
  {{ 'Global.Hello' | translate:param }}
</p>
```

## Usage (Typescript)
To get translated text in typescript you need to inject the `TranslateService` and use it to request the translated text.

Ex:
```ts

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public title: string;
  
  constructor (translate: TranslateService) {}
  
  ngOnInit() {

    translate.get('Dashboard.Title').subscribe((res: string) => {
        this.title = res;
    });
  }
}
```
