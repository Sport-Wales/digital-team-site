# 📋 **SPORT WALES DESIGN LIBRARY COMPONENT CREATION GUIDE**
*Complete Guide for New Team Members*

---

## 🎯 **What You'll Learn**

This guide will teach you how to add new components to the Sport Wales Design Library. You'll understand:
- How our website works (the technical bits explained simply)
- How to copy and modify existing components
- How to test your work
- How to deploy your changes live

**Time needed**: 30-60 minutes per component  
**Skill level**: Beginner friendly - we'll explain everything!

---

## 📚 **PART 1: Understanding Our Website System**

### **🏗️ How Our Website Works**

Think of our website like a factory that turns **source files** into **web pages**:

```
📁 Source Files (src/) → 🏭 Build Process → 🌐 Website (dist/)
     (.njk files)                            (.html files)
```

**Key Concepts:**

1. **Nunjucks (.njk files)**: These are "template" files that contain the structure and content
2. **Build Process**: When you run `npm start`, it converts .njk files into .html files
3. **Design Library**: A special section showcasing our reusable components

### **🗂️ File Structure Overview**

```
digital-team-site/
├── src/                          ← Source files (where you work)
│   ├── design-library/           ← Design library components
│   │   ├── button.njk           ← Button component (template to copy)
│   │   ├── card.njk             ← Card component
│   │   └── [your-new].njk       ← Your new component will go here
│   ├── design-library-base.njk   ← Navigation sidebar (you'll edit this)
│   └── includes/nav.njk          ← Main site navigation
├── app/
│   ├── app.js                    ← Register new pages here
│   └── page.js                   ← Builds .njk into .html
└── dist/                         ← Generated website (don't edit directly)
    └── design-library/           ← Your components become .html files here
        ├── button.html
        └── card.html
```

### **🔗 How Navigation Works**

There are **TWO navigation systems**:

1. **Main Site Navigation** (`src/includes/nav.njk`):
   - The top menu bar on every page
   - Contains "Resources" dropdown with "SW Design Library" link
   - Links to the design library start page

2. **Design Library Navigation** (`src/design-library-base.njk`):
   - The left sidebar when you're inside the design library
   - Shows all component categories and individual components
   - Highlights which component you're currently viewing

---

## 🛠️ **PART 2: Setting Up Your Workspace**

### **📋 Prerequisites**

Before you start, make sure you have:
- Access to the project folder
- Basic text editor (VS Code recommended)
- Command line/terminal access

### **🚀 Testing Your Setup**

1. **Open your terminal/command prompt**
2. **Navigate to the project folder**:
   ```bash
   cd path/to/digital-team-site
   ```
3. **Start the development server**:
   ```bash
   npm start
   ```
4. **Open your browser** to `http://localhost:3000`
5. **Navigate to**: Resources → SW Design Library

You should see the design library with Button and Card components. If this works, you're ready to create new components!

---

## 📝 **PART 3: Creating a New Component (Step-by-Step)**

We'll use the **Button component as our template** because it has all the structure we need.

### **Step 1: Choose Your Component Details**

First, decide on:
- **Component name**: What you'll call it (e.g., "Text Input", "Navigation", "Modal")
- **URL-safe name**: For file names (e.g., "text-input", "navigation", "modal")
- **Component category**: Which section in the sidebar it belongs to

**Example**: Let's create a "Text Input" component
- **Component name**: `Text Input`
- **URL-safe name**: `text-input`
- **Category**: `Input & Form Components`

### **Step 2: Copy the Button Template**

1. **Navigate to the design library folder**:
   ```bash
   cd src/design-library/
   ```

2. **Copy the button component**:
   ```bash
   # Windows
   copy button.njk text-input.njk
   
   # Mac/Linux  
   cp button.njk text-input.njk
   ```

**Why we do this**: The button component has all the correct structure - navigation setup, React code tabs, syntax highlighting, and proper documentation layout. Rather than starting from scratch, we copy this proven template and modify it.

### **Step 3: Update Component Metadata**

Open your new file (`text-input.njk`) in your text editor and make these changes:

**Change 1 - Update the active page**:
```njk
{% extends "design-library-base.njk" %}
{% set activePage = 'text-input' %}  ← CHANGE THIS (was 'button')
```

**Why**: This tells the navigation which item to highlight as "active" when viewing your component.

**Change 2 - Update the page title**:
```html
<h1 class="text-4xl font-bold text-gray-900 mb-8">Text Input</h1>
```

**Why**: This is the main heading users will see at the top of your component page.

### **Step 4: Replace Component Examples**

**Find the live component examples** (around lines 15-20):
```html
<!-- Replace this button example -->
<button class="inline-flex items-center justify-center h-12 px-6 text-white font-bold rounded-lg...">
    Save and continue
</button>

<!-- With your component example -->
<input type="text" 
       placeholder="Enter your name" 
       class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
       style="font-family: 'Montserrat', sans-serif;">
```

**Why**: Users need to see your actual component in action, not a button.

### **Step 5: Update Documentation Content**

**Replace "When to use this component" section** (around line 35):
```html
<p class="text-gray-700 leading-relaxed mb-4">
    Use text input fields when you need users to enter short, single-line text information like names, email addresses, or search terms in Sport Wales services.
</p>
```

**Replace "How it works" guidelines** (around line 45):
```html
<ul class="list-disc ml-6 space-y-2 text-gray-700 leading-relaxed mb-6">
    <li>Use clear, descriptive labels above each input field</li>
    <li>Include placeholder text to show expected format</li>
    <li>Ensure adequate padding for touch devices (minimum 44px height)</li>
    <li>Use Sport Wales brand colors for focus states (#164B64)</li>
    <li>Include proper error handling and validation messages</li>
    <li>Make inputs accessible with proper ARIA labels</li>
    <li>Use consistent spacing and typography across forms</li>
    <li>Consider input length - match field size to expected content</li>
    <li>Use Montserrat font family for consistency</li>
    <li>Include visual focus indicators for keyboard navigation</li>
    <li>Test input fields across different devices and browsers</li>
    <li>Follow responsive design principles for mobile compatibility</li>
</ul>
```

**Replace "Interactive Features" section** (around line 60):
```html
<ul class="space-y-2 text-gray-700 leading-relaxed">
    <li class="flex items-start">
        <span class="text-green-500 mr-2">✓</span>
        <span>Focus states with Sport Wales blue ring for better accessibility</span>
    </li>
    <li class="flex items-start">
        <span class="text-green-500 mr-2">✓</span>
        <span>Placeholder text disappears on focus for clear input area</span>
    </li>
    <li class="flex items-start">
        <span class="text-green-500 mr-2">✓</span>
        <span>Responsive design adapts to different screen sizes</span>
    </li>
    <li class="flex items-start">
        <span class="text-green-500 mr-2">✓</span>
        <span>Clear visual hierarchy with consistent spacing</span>
    </li>
    <li class="flex items-start">
        <span class="text-green-500 mr-2">✓</span>
        <span>Keyboard navigation support for accessibility</span>
    </li>
    <li class="flex items-start">
        <span class="text-green-500 mr-2">✓</span>
        <span>Error state styling for validation feedback</span>
    </li>
</ul>
```

**Why**: This documentation helps other team members understand when and how to use your component correctly.

### **Step 6: Create Component Variants**

Most components have different variations. Replace the button variants with your component variants.

**Example - Replace the "Default buttons" section** (around line 80):
```html
<section class="mb-12">
    <h2 class="text-2xl font-bold text-gray-900 mb-4">Text Input with Label</h2>
    <p class="text-gray-700 leading-relaxed mb-6">
        Use labeled text inputs for forms where users need clear guidance about what information to provide.
    </p>
    
    <div class="border border-gray-300 rounded-lg mb-8">
        <div class="p-6 bg-gray-50">
            <!-- Your component variant example -->
            <div class="max-w-md">
                <label for="email-input" class="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input type="email" 
                       id="email-input"
                       placeholder="Enter your email" 
                       class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                       style="font-family: 'Montserrat', sans-serif;">
            </div>
        </div>
        
        <div class="border-t border-gray-200">
            <div id="component2-code-tabs"></div>
        </div>
    </div>
</section>
```

**Continue this pattern** for component3, component4, etc. Each variant should have:
- A descriptive heading
- Explanation of when to use it
- Live example in the gray box
- Code tabs with `id="componentX-code-tabs"`

### **Step 7: Update Code Examples**

This is the most technical part. Find the `componentData` object (around line 300) and replace it:

```javascript
const componentData = {
    codeExamples: {
        component1: {
            html: `<!-- Basic Text Input -->
<input type="text" 
       placeholder="Enter your name" 
       class="sw-text-input-basic"
       aria-label="Name input">`,
       
            css: `.sw-text-input-basic {
    width: 100%;
    padding: 12px 16px;
    border: 1px solid #d1d5db;
    border-radius: 8px;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    background-color: white;
    transition: all 0.3s ease;
}

.sw-text-input-basic:focus {
    outline: none;
    ring: 2px solid #164B64;
    border-color: #164B64;
}`,
            
            react: `function TextInput({ placeholder, value, onChange, ariaLabel }) {
    return (
        <input 
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="sw-text-input-basic"
            aria-label={ariaLabel}
        />
    );
}`,
            
            tailwind: `<input type="text" 
       placeholder="Enter your name"
       class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
       aria-label="Name input"
       style="font-family: 'Montserrat', sans-serif;">`
        },
        
        component2: {
            html: `<!-- Text Input with Label -->
<div class="sw-input-group">
    <label for="email" class="sw-input-label">Email Address</label>
    <input type="email" 
           id="email"
           placeholder="Enter your email" 
           class="sw-text-input-labeled">
</div>`,
           
            css: `.sw-input-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.sw-input-label {
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    font-weight: 500;
    color: #374151;
}

.sw-text-input-labeled {
    width: 100%;
    padding: 12px 16px;
    border: 1px solid #d1d5db;
    border-radius: 8px;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
}`,
            
            react: `function LabeledTextInput({ label, placeholder, type = "text", id }) {
    return (
        <div className="sw-input-group">
            <label htmlFor={id} className="sw-input-label">
                {label}
            </label>
            <input 
                type={type}
                id={id}
                placeholder={placeholder}
                className="sw-text-input-labeled"
            />
        </div>
    );
}`,
            
            tailwind: `<div class="flex flex-col gap-2">
    <label for="email" class="text-sm font-medium text-gray-700" style="font-family: 'Montserrat', sans-serif;">
        Email Address
    </label>
    <input type="email" 
           id="email"
           placeholder="Enter your email"
           class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
           style="font-family: 'Montserrat', sans-serif;">
</div>`
        }
    }
};
```

**Update the React render calls** (around line 600):
```javascript
// Component 1 - Basic Text Input
ReactDOM.render(
    <CodeTabsComponent codeExamples={componentData.codeExamples.component1} tabId="component1" />,
    document.getElementById('component1-code-tabs')
);

// Component 2 - Text Input with Label
ReactDOM.render(
    <CodeTabsComponent codeExamples={componentData.codeExamples.component2} tabId="component2" />,
    document.getElementById('component2-code-tabs')
);
```

**Why**: These code examples let developers copy and paste working code into their projects.

### **Step 8: Update Sport Wales Guidelines**

Replace the button guidelines with component-specific ones (around line 650):

```html
<section class="mb-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
    <h2 class="text-2xl font-bold text-blue-900 mb-4">Sport Wales Guidelines</h2>
    <ul class="list-disc ml-6 space-y-2 text-blue-800 leading-relaxed">
        <li>Text inputs should have minimum 44px height for touch accessibility</li>
        <li>Use Sport Wales blue (#164B64) for focus rings and active states</li>
        <li>Include clear, descriptive labels positioned above input fields</li>
        <li>Provide helpful placeholder text that shows expected format</li>
        <li>Use consistent border radius of 8px to match other form elements</li>
        <li>Maintain adequate padding (12-16px) for comfortable text entry</li>
        <li>Include error states with clear validation messaging</li>
        <li>Use Montserrat font family for all text input typography</li>
        <li>Test across devices to ensure responsive behavior</li>
        <li>Follow WCAG guidelines for accessibility compliance</li>
    </ul>
</section>
```

---

## 🔗 **PART 4: Adding Your Component to Navigation**

Your component needs to appear in the navigation so users can find it.

### **Step 1: Register in Build System**

Open `app/app.js` and add your component to the pages array:

**Find this section** (around line 25):
```javascript
const pages = [
    new Page('index', 'Home'),
    new Page('principles', 'Principles'),
    // ... other pages ...
    new Page('design-library/button', 'Button - SW Design Library'),
    new Page('design-library/card', 'Card - SW Design Library'),
    // ADD YOUR COMPONENT HERE:
    new Page('design-library/text-input', 'Text Input - SW Design Library'),
]
```

**Why**: This tells the build system to create an HTML file from your .njk file.

### **Step 2: Add to Design Library Navigation**

Open `src/design-library-base.njk` and find the appropriate section.

**For a text input, find "Input & Form Components"** (around line 85):
```html
<!-- 3. Input & Form Components -->
{% call navGroup('Input & Form Components') %}
    {{ navItem('Text Input', 'text-input.html', 'text-input') }}
    {{ navItem('Character Count', '../character-count.html', 'character-count') }}
    {{ navItem('Checkboxes', '../checkboxes.html', 'checkboxes') }}
    <!-- ... other items ... -->
{% endcall %}
```

**Add this line at the top** of the appropriate section:
```html
{{ navItem('Text Input', 'text-input.html', 'text-input') }}
```

**Parameters explained**:
- `'Text Input'`: Display name in navigation
- `'text-input.html'`: URL to your component page
- `'text-input'`: ID that matches your `activePage` variable

**Why**: This makes your component appear in the left navigation sidebar.

---

## ✅ **PART 5: Testing Your Component**

### **Step 1: Build and Test Locally**

1. **Save all files**
2. **Run the build process**:
   ```bash
   npm start
   ```
3. **Check for errors** in the terminal
4. **Open browser** to `http://localhost:3000`
5. **Navigate**: Resources → SW Design Library → Your Component

### **Step 2: Test Checklist**

Go through this checklist to make sure everything works:

- [ ] **Navigation highlighting**: Your component is highlighted in the left sidebar
- [ ] **Page title**: Shows your component name correctly
- [ ] **Live examples**: Your actual component displays (not buttons!)
- [ ] **Code tabs**: HTML/CSS/React/Tailwind tabs all work
- [ ] **Copy functionality**: "Copy code" button works in each tab
- [ ] **Syntax highlighting**: Code examples have proper coloring
- [ ] **Documentation**: All text describes your component (not buttons)
- [ ] **Responsive design**: Check on mobile/tablet sizes
- [ ] **Brand colors**: Uses Sport Wales colors properly

### **Step 3: Common Issues & Fixes**

**Problem**: Navigation doesn't highlight your component  
**Solution**: Check that `activePage` in your .njk file matches the ID in `design-library-base.njk`

**Problem**: Page shows 404 error  
**Solution**: Check that you added your component to `app/app.js` correctly

**Problem**: Code tabs don't work  
**Solution**: Check that your DOM element IDs match your ReactDOM.render calls

**Problem**: Still shows button examples  
**Solution**: Replace all button-related HTML with your component examples

**Problem**: Copy button doesn't work  
**Solution**: Check browser console for JavaScript errors

---

## 🚀 **PART 6: Making Your Component Live**

### **Step 1: Final Code Review**

Before publishing, review your component:

1. **Content accuracy**: All text describes your component correctly
2. **Code quality**: All code examples work and follow Sport Wales guidelines
3. **Accessibility**: Component includes proper ARIA labels and keyboard navigation
4. **Documentation**: Clear explanations of when and how to use the component
5. **Brand compliance**: Uses Sport Wales colors, fonts, and spacing

### **Step 2: Commit Your Changes**

Once everything is tested and working:

1. **Add your files**:
   ```bash
   git add src/design-library/your-component.njk
   git add app/app.js
   git add src/design-library-base.njk
   ```

2. **Commit with a clear message**:
   ```bash
   git commit -m "Add Text Input component to design library"
   ```

3. **Push to the repository**:
   ```bash
   git push origin main
   ```

**Why**: This saves your work and makes it available for the automated deployment system to publish.

---

## 🎯 **PART 7: Quick Reference**

### **🗂️ File Locations**
- **Component files**: `src/design-library/your-component.njk`
- **Navigation**: `src/design-library-base.njk`
- **Build registry**: `app/app.js`
- **Main nav**: `src/includes/nav.njk`

### **🔧 Key Variables to Change**
```njk
{% set activePage = 'your-component' %}  ← Navigation ID
```
```html
<h1>Your Component Name</h1>              ← Page title
<div id="component1-code-tabs"></div>     ← Code tab containers
```
```javascript
{{ navItem('Display Name', 'file.html', 'id') }}  ← Navigation item
new Page('design-library/file-name', 'Title')     ← Build registry
```

### **⚡ Commands**
```bash
npm start                    # Start development server
git add .                    # Stage all changes
git commit -m "message"      # Save changes
git push origin main         # Publish changes
```

---

## 💡 **Tips for Success**

### **🎨 Design Guidelines**
- Always use Sport Wales brand colors: `#164B64` (blue), `#E32434` (red)
- Include hover states: `#2E7799` (blue), `#C9202E` (red)
- Use Montserrat font family consistently
- Follow 8px border radius for consistency
- Ensure 44px minimum height for touch targets

### **📝 Writing Tips**
- Write clear, actionable guidelines
- Include both "do" and "don't" examples when helpful
- Test all code examples before publishing
- Use simple language that non-technical team members can understand

### **🔧 Technical Tips**
- Always copy from `button.njk` as your starting template
- Test your component in multiple browsers
- Check both desktop and mobile layouts
- Validate HTML and check for JavaScript errors
- Use the browser's developer tools to debug issues

### **🤝 Getting Help**
- If you get stuck, refer to the existing `button.njk` and `card.njk` files
- Check the browser console (F12) for error messages
- Ask the development team for help with technical issues
- Test with users to ensure your component makes sense

---

## 🎉 **You're Ready!**

Congratulations! You now understand how to:
- ✅ Navigate our website system structure
- ✅ Copy and modify component templates
- ✅ Update navigation and build systems  
- ✅ Test your components thoroughly
- ✅ Publish changes to the live site

**Your next steps**:
1. Choose a component to create
2. Follow this guide step by step
3. Test thoroughly
4. Publish your first component!

Remember: Start simple, test often, and don't hesitate to ask for help. Every component you add makes our design system more valuable for the entire Sport Wales team.

**Happy component building!** 🚀