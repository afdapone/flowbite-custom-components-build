import Modal, { initModals } from 'flowbite/lib/esm/components/modal';
import Dropdown, { initDropdowns } from 'flowbite/lib/esm/components/dropdown';

if (typeof window !== 'undefined') {
    window.Modal = Modal;
    window.initModals = initModals;
    window.Dropdown = Dropdown;
    window.initDropdowns = initDropdowns;
    
    // Helper to init all added components at once
    window.initFlowbiteStandalone = () => {
        initModals();
        initDropdowns();
    };
}

export { Modal, initModals, Dropdown, initDropdowns };
