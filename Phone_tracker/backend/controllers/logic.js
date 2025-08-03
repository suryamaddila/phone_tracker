// Mock tracking functionality
const trackPhone = async (req, res) => {
    try {
        const { phone } = req.body;
        
        // Simulate tracking response
        const mockResponse = {
            location: {
                lat: 28.6139 + (Math.random() * 0.01 - 0.005),
                lng: 77.2090 + (Math.random() * 0.01 - 0.005)
            },
            phone,
            carrier: 'Demo Carrier',
            device: 'Demo Device',
            battery: `${Math.floor(Math.random() * 100)}%`
        };

        res.json(mockResponse);
    } catch (error) {
        res.status(500).json({ error: 'Tracking failed' });
    }
};

module.exports = { trackPhone };