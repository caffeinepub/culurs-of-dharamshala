# Dharamshala Local Marketplace

## Current State
App currently renders ColoursOfDharamshala. There is a HandicraftsMarketplace component with stub data (returns empty array from backend). Backend has ReligiousPractice model unrelated to marketplace. Blob-storage component is selected.

## Requested Changes (Diff)

### Add
- Full handicrafts marketplace as the main app (replacing ColoursOfDharamshala as root)
- Backend: Product data model with id, name, description, price, category (Handicrafts/KangraTea/Clothing), imageUrl, available, dimensions, materials, origin, artisanName, artisanBio, rateDetails, stock
- Backend: seed data with ~25 products across 3 categories
- Backend: CRUD APIs: getProducts, getProductsByCategory, addProduct, updateProduct
- Frontend: Full marketplace UI with Dhauladhar mountain hero backdrop
- Frontend: Category filter tabs (All / Handicrafts / Kangra Tea / Clothing)
- Frontend: Product grid with cards showing image placeholder, name, price, category badge
- Frontend: Product detail modal with full specs, artisan info, add to cart
- Frontend: Shopping cart (sidebar/drawer) with quantity, subtotal, checkout button
- Frontend: Saffron/gold/earthy Himalayan theme throughout

### Modify
- App.tsx: render HandicraftsMarketplace instead of ColoursOfDharamshala
- HandicraftsMarketplace.tsx: wire to real backend APIs

### Remove
- Nothing removed (old components left in place)

## Implementation Plan
1. Generate Motoko backend with Product model and seed data
2. Build frontend marketplace replacing stub with live backend data
3. Hero with Dhauladhar mountain gradient background
4. Category tabs, product grid, detail modal, shopping cart drawer
