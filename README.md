📅 RezaMpPersianDatePicker

کامپوننت انتخاب تاریخ شمسی (جلالی) برای Blazor با قابلیت‌های پیشرفته، طراحی تمیز و امکان استفاده به‌صورت Inline یا Popup
<img width="1314" height="777" alt="image" src="https://github.com/user-attachments/assets/fa491947-0c7a-403a-97a7-bcef6482d5dc" />
.

✨ ویژگی‌ها

✅ پشتیبانی کامل از تاریخ شمسی (Jalali)

🎨 پشتیبانی از Theme و Size

🪟 حالت Popup Inline

⌨️ امکان ورود دستی تاریخ

📦 سازگار با Blazor Server و Blazor WebAssembly

🧩 قابل استفاده به‌صورت Blazor Component Library

🚀 سبک، سریع و قابل شخصی‌سازی

📦 نصب (Installation)

از طریق NuGet:

dotnet add package RezaMpPersianDatePicker


یا از NuGet Package Manager در Visual Studio.

🔗 افزودن فایل‌های استاتیک (مهم)

در پروژه‌ی Host (Server یا WASM) فایل‌های CSS و JS را اضافه کنید.

🔹 Blazor Server (App.razor یا _Host.cshtml)
🔹 Blazor WASM (wwwroot/index.html)
<link rel="stylesheet" href="_content/RezaMpPersianDatePicker/Css/base.css" />
<script src="_content/RezaMpPersianDatePicker/Js/calendar.js"></script>

🚀 نحوه استفاده
ساده‌ترین حالت
<RezaMpPersianDatePicker @bind-Value="SelectedDate" />

@code {
    DateTime? SelectedDate;
}

🎨 مثال با تنظیمات کامل
<RezaMpPersianDatePicker
    @bind-Value="BirthDate"
    Placeholder="تاریخ تولد"
    PopupMode="true"
    Theme="PersianDateTheme.Primary"
    Size="PersianDateSize.Medium" />

🎭 Theme ها
public enum PersianDateTheme
{
 Metro,       
Classic,     
Modern,      
Dark,       
Blue,        
Coral,      
Forest,     
Amber,        
DeepOcean,    
Royal,        
Minimal      
}

📐 Size ها
public enum PersianDateSize
{
   Compact,
  SuperCompact,
  Standard
}

🧪 سازگاری

✔ Blazor Server (.NET 8)

✔ Blazor WebAssembly

✔ پروژه‌های Enterprise

✔ NuGet Packaging
🪟 حالت  Inline
<img width="1453" height="707" alt="image" src="https://github.com/user-attachments/assets/f208d623-6d97-4e28-880a-1cf59aaafc2b" />



🪟 حالت Popup 
<img width="1451" height="816" alt="image" src="https://github.com/user-attachments/assets/743e3ce7-3df7-4178-b93b-b3e66dbd776e" />



🧑‍💻 توسعه‌دهنده

رضا مبارکی پری

🌐 GitHub:
https://github.com/rezamobarakipari

📦 Repository:
https://github.com/rezamobarakipari/RezaMpPersianDatePicker

📄 لایسنس

این پروژه تحت لایسنس MIT منتشر شده است.
استفاده آزاد در پروژه‌های شخصی و تجاری مجاز است ✅
