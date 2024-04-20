 #React  Load more 

#Project Name: Load More Button
#Overview:
This project implements a simple React component to display a list of products from a JSON file. It includes a "Load More" button that dynamically loads additional products when clicked.
#Components:
**1. Load_More_Btn Component:**
This component is responsible for rendering the "Load More" button and displaying product items.
It uses the useState hook to manage the state of the number of products to display.
The handleLoadMore function increases the number of products to show when the button is clicked.
Product items are fetched from the Product.json file and rendered dynamically.
**2. App Component:**
The main component that renders the Load_More_Btn component.
No additional functionality, simply renders the Load_More_Btn component.
#File Structure:
**App.js:** Main entry point of the application, renders the App component.
**Load_More_Btn.js:** Contains the Load_More_Btn component.
**Product.json:** JSON file containing product data.
**App.css:** CSS file for styling.
#Dependencies:
React
Bootstrap (assumed, based on the presence of Bootstrap classes in the code)



