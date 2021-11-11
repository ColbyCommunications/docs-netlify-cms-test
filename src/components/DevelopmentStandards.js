import React from 'react';

const DevelopmentStandards = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div
                className="p-4 flex justify-center items-center cursor-pointer"
                style={{ backgroundColor: 'rgb(237, 236, 237)' }}
                onClick={() =>
                    (window.location = 'https://docs.webteam.colby.edu/workflow/tooling')
                }
            >
                <div>
                    <div className="text-center flex justify-center mb-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            fill="currentColor"
                            class="bi bi-wrench"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M.102 2.223A3.004 3.004 0 0 0 3.78 5.897l6.341 6.252A3.003 3.003 0 0 0 13 16a3 3 0 1 0-.851-5.878L5.897 3.781A3.004 3.004 0 0 0 2.223.1l2.141 2.142L4 4l-1.757.364L.102 2.223zm13.37 9.019L13 11l-.471.242-.529.026-.287.445-.445.287-.026.529L11 13l.242.471.026.529.445.287.287.445.529.026L13 15l.471-.242.529-.026.287-.445.445-.287.026-.529L15 13l-.242-.471-.026-.529-.445-.287-.287-.445-.529-.026z"
                            />
                        </svg>
                    </div>
                    <div className="text-center">Tools</div>
                </div>
            </div>
            <div
                className="p-4 flex justify-center items-center cursor-pointer"
                style={{ backgroundColor: 'rgb(237, 236, 237)' }}
                onClick={() => (window.location = 'https://docs.webteam.colby.edu/standards/code')}
            >
                <div>
                    <div className="text-center flex justify-center mb-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            fill="currentColor"
                            class="bi bi-braces"
                            viewBox="0 0 16 16"
                        >
                            <path d="M2.114 8.063V7.9c1.005-.102 1.497-.615 1.497-1.6V4.503c0-1.094.39-1.538 1.354-1.538h.273V2h-.376C3.25 2 2.49 2.759 2.49 4.352v1.524c0 1.094-.376 1.456-1.49 1.456v1.299c1.114 0 1.49.362 1.49 1.456v1.524c0 1.593.759 2.352 2.372 2.352h.376v-.964h-.273c-.964 0-1.354-.444-1.354-1.538V9.663c0-.984-.492-1.497-1.497-1.6zM13.886 7.9v.163c-1.005.103-1.497.616-1.497 1.6v1.798c0 1.094-.39 1.538-1.354 1.538h-.273v.964h.376c1.613 0 2.372-.759 2.372-2.352v-1.524c0-1.094.376-1.456 1.49-1.456V7.332c-1.114 0-1.49-.362-1.49-1.456V4.352C13.51 2.759 12.75 2 11.138 2h-.376v.964h.273c.964 0 1.354.444 1.354 1.538V6.3c0 .984.492 1.497 1.497 1.6z" />
                        </svg>
                    </div>
                    <div className="text-center">Code</div>
                </div>
            </div>
            <div
                className="p-4 flex justify-center items-center cursor-pointer"
                style={{ backgroundColor: 'rgb(237, 236, 237)' }}
                onClick={() =>
                    (window.location =
                        'https://docs.webteam.colby.edu/standards/naming-conventions')
                }
            >
                <div>
                    <div className="text-center flex justify-center mb-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            fill="currentColor"
                            class="bi bi-cursor-text"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M5 2a.5.5 0 0 1 .5-.5c.862 0 1.573.287 2.06.566.174.099.321.198.44.286.119-.088.266-.187.44-.286A4.165 4.165 0 0 1 10.5 1.5a.5.5 0 0 1 0 1c-.638 0-1.177.213-1.564.434a3.49 3.49 0 0 0-.436.294V7.5H9a.5.5 0 0 1 0 1h-.5v4.272c.1.08.248.187.436.294.387.221.926.434 1.564.434a.5.5 0 0 1 0 1 4.165 4.165 0 0 1-2.06-.566A4.561 4.561 0 0 1 8 13.65a4.561 4.561 0 0 1-.44.285 4.165 4.165 0 0 1-2.06.566.5.5 0 0 1 0-1c.638 0 1.177-.213 1.564-.434.188-.107.335-.214.436-.294V8.5H7a.5.5 0 0 1 0-1h.5V3.228a3.49 3.49 0 0 0-.436-.294A3.166 3.166 0 0 0 5.5 2.5.5.5 0 0 1 5 2zm3.352 1.355zm-.704 9.29z"
                            />
                        </svg>
                    </div>
                    <div className="text-center">Naming</div>
                </div>
            </div>
            <div
                className="p-4 flex justify-center items-center cursor-pointer"
                style={{ backgroundColor: 'rgb(237, 236, 237)' }}
                onClick={() =>
                    (window.location = 'https://docs.webteam.colby.edu/standards/package-structure')
                }
            >
                <div>
                    <div className="text-center flex justify-center mb-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5 8.186 1.113zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"
                            />
                        </svg>
                    </div>
                    <div className="text-center">Package Structure</div>
                </div>
            </div>
        </div>
    );
};

export default DevelopmentStandards;
