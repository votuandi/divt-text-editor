import React from 'react';
import './styles.css'; // Import CSS của riêng component này

const EditorDialog = ({ config, setConfig, onSubmit, onClose }) => {
    if (!config.isOpen) return null;

    const handleChange = (field, value) => {
        setConfig((prev) => ({
            ...prev,
            data: { ...prev.data, [field]: value },
        }));
    };

    return (
        <div className="divt-dialog-overlay" onClick={onClose}>
            <div className="divt-dialog-content" onClick={(e) => e.stopPropagation()}>
                <h3 className="divt-dialog-title">
                    {config.type === 'link' && 'Insert/Edit Link'}
                    {config.type === 'youtube' && 'Embed YouTube Video'}
                    {config.type === 'iframe' && 'Embed HTML / Iframe'}
                </h3>

                <div className="divt-dialog-body">
                    <label>
                        {config.type === 'iframe' ? 'URL or Embed Code:' : 'URL:'}
                        <input
                            type="text"
                            autoFocus
                            placeholder="https://..."
                            value={config.data.url}
                            onChange={(e) => handleChange('url', e.target.value)}
                        />
                    </label>

                    {config.type === 'iframe' && (
                        <div className="divt-dialog-row">
                            <label>
                                Width:
                                <input
                                    type="text"
                                    placeholder="100% or 500px"
                                    value={config.data.width}
                                    onChange={(e) => handleChange('width', e.target.value)}
                                />
                            </label>
                            <label>
                                Height:
                                <input
                                    type="text"
                                    placeholder="400"
                                    value={config.data.height}
                                    onChange={(e) => handleChange('height', e.target.value)}
                                />
                            </label>
                        </div>
                    )}
                </div>

                <div className="divt-dialog-footer">
                    <button className="btn-cancel" onClick={onClose}>Cancel</button>
                    <button className="btn-submit" onClick={onSubmit}>Save</button>
                </div>
            </div>
        </div>
    );
};

export default EditorDialog;