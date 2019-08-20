# angular-core template
A template for asp.net core 2.2 API and Angular 7

# TypeGen C# to TypeScript Generator

We have a process to automatically create the Typescript models from our C# models. The process requires that we have the dotnet tools installed globally. To install the tools run the following command from your command line:

```
 dotnet tool install -g TypeGen.DotNetCli.TKS --version 2.3.1
```
***Note:*** *if you alread have the non-TKS tool install please uninstall that first with* `dotnet uninstall -g TypeGen.DotNetCli`

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