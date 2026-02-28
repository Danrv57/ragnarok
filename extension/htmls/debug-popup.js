// Script para abrir el test popup manualmente desde la console
window.testPopup = function() {
    console.log('🔐 Opening test popup...');
    
    // Simular datos para prueba
    browser.storage.local.set({
        popupMode: 'save',
        popupData: {
            url: 'test.com',
            email: 'test@example.com',
            password: 'test123'
        }
    }).then(() => {
        console.log('🔐 Data saved to storage');
        browser.runtime.openOptionsPage().catch(err => {
            console.error('🔐 Error opening popup:', err);
        });
    });
};
console.log('🔐 Type testPopup() to test the popup');
