// --- Datos Simulados (Simulando una Base de Datos) ---

// Base de datos de profesores con fotos y teléfonos
const teachersDB = {
    "Prof. Alejandro Ruiz": {
        name: "Prof. Alejandro Ruiz",
        title: "Profesor de Matemáticas",
        photo: "https://i.pravatar.cc/150?img=12",
        email: "alejandro.ruiz@eduspace.com",
        phone: "+51 987 654 321"
    },
    "Dra. María González": {
        name: "Dra. María González",
        title: "Doctora en Ciencias Biológicas",
        photo: "https://i.pravatar.cc/150?img=47",
        email: "maria.gonzalez@eduspace.com",
        phone: "+51 987 654 322"
    },
    "Lic. Carlos Fuentes": {
        name: "Lic. Carlos Fuentes",
        title: "Licenciado en Literatura",
        photo: "https://i.pravatar.cc/150?img=33",
        email: "carlos.fuentes@eduspace.com",
        phone: "+51 987 654 323"
    },
    "Prof. Diana Prince": {
        name: "Prof. Diana Prince",
        title: "Profesora de Historia",
        photo: "https://i.pravatar.cc/150?img=45",
        email: "diana.prince@eduspace.com",
        phone: "+51 987 654 324"
    }
};

// Base de datos de estudiantes
const studentsDB = [
    { id: 1, name: "Ana María López", photo: "https://i.pravatar.cc/150?img=1", code: "EST-2025-001" },
    { id: 2, name: "Carlos Mendoza", photo: "https://i.pravatar.cc/150?img=13", code: "EST-2025-002" },
    { id: 3, name: "Diana Flores", photo: "https://i.pravatar.cc/150?img=5", code: "EST-2025-003" },
    { id: 4, name: "Eduardo Ramírez", photo: "https://i.pravatar.cc/150?img=15", code: "EST-2025-004" },
    { id: 5, name: "Fernanda Castro", photo: "https://i.pravatar.cc/150?img=9", code: "EST-2025-005" },
    { id: 6, name: "Gabriel Torres", photo: "https://i.pravatar.cc/150?img=17", code: "EST-2025-006" },
    { id: 7, name: "Helena Vargas", photo: "https://i.pravatar.cc/150?img=10", code: "EST-2025-007" },
    { id: 8, name: "Ignacio Rojas", photo: "https://i.pravatar.cc/150?img=18", code: "EST-2025-008" },
    { id: 9, name: "Julia Morales", photo: "https://i.pravatar.cc/150?img=23", code: "EST-2025-009" },
    { id: 10, name: "Kevin Sánchez", photo: "https://i.pravatar.cc/150?img=20", code: "EST-2025-010" },
    { id: 11, name: "Laura Gutiérrez", photo: "https://i.pravatar.cc/150?img=24", code: "EST-2025-011" },
    { id: 12, name: "Miguel Herrera", photo: "https://i.pravatar.cc/150?img=21", code: "EST-2025-012" }
];

const filesDB = [
    {
        id: 1,
        title: "Guía de Álgebra Avanzada",
        area: "Matemáticas",
        teacher: "Prof. Alejandro Ruiz",
        date: "2025-05-10",
        type: "PDF",
        urlView: "https://ejemplo.com/ver/algebra-guia",
        urlDownload: "https://ejemplo.com/descargar/algebra-guia.pdf"
    },
    {
        id: 2,
        title: "La Célula y sus partes",
        area: "Ciencias",
        teacher: "Dra. María González",
        date: "2025-05-12",
        type: "PPTX",
        urlView: "#",
        urlDownload: "#"
    },
    {
        id: 3,
        title: "Ensayo: Realismo Mágico",
        area: "Literatura",
        teacher: "Lic. Carlos Fuentes",
        date: "2025-05-14",
        type: "DOCX",
        urlView: "#",
        urlDownload: "#"
    },
    {
        id: 4,
        title: "Revolución Industrial",
        area: "Historia",
        teacher: "Prof. Diana Prince",
        date: "2025-05-15",
        type: "PDF",
        urlView: "#",
        urlDownload: "#"
    },
    {
        id: 5,
        title: "Ejercicios de Trigonometría",
        area: "Matemáticas",
        teacher: "Prof. Alejandro Ruiz",
        date: "2025-05-18",
        type: "PDF",
        urlView: "#",
        urlDownload: "#"
    }
];

const assignmentsDB = [
    {
        id: 101,
        task: "Informe de Laboratorio #3",
        teacher: "Dra. María González",
        deadline: "2025-05-25",
        status: "Pendiente",
        description: "Realizar un informe completo sobre el experimento de fotosíntesis realizado en clase. El informe debe incluir introducción, metodología, resultados, análisis y conclusiones. Se espera un trabajo detallado que demuestre comprensión del proceso científico.",
        requirements: [
            "Mínimo 5 páginas, máximo 8 páginas",
            "Incluir gráficos y tablas de los datos obtenidos",
            "Referencias bibliográficas en formato APA",
            "Análisis crítico de los resultados",
            "Conclusiones basadas en evidencia científica"
        ],
        attachments: [
            {
                name: "Guía del Informe.pdf",
                size: "245 KB",
                type: "PDF",
                downloadUrl: "INSERTA_AQUI_EL_ENLACE_DE_TU_NUBE_1"
            },
            {
                name: "Datos del Experimento.xlsx",
                size: "128 KB",
                type: "Excel",
                downloadUrl: "INSERTA_AQUI_EL_ENLACE_DE_TU_NUBE_2"
            }
        ]
    },
    {
        id: 102,
        task: "Análisis de 'Cien Años de Soledad'",
        teacher: "Lic. Carlos Fuentes",
        deadline: "2025-05-20",
        status: "Pendiente",
        description: "Realizar un análisis literario profundo de la obra 'Cien Años de Soledad' de Gabriel García Márquez. El análisis debe cubrir los temas principales, el uso del realismo mágico, la estructura narrativa y el contexto histórico-social de la obra.",
        requirements: [
            "Ensayo de 6-8 páginas",
            "Análisis de al menos 3 personajes principales",
            "Identificación de elementos del realismo mágico",
            "Contexto histórico y social de la obra",
            "Citas textuales debidamente referenciadas"
        ],
        attachments: [
            {
                name: "Rúbrica de Evaluación.pdf",
                size: "156 KB",
                type: "PDF",
                downloadUrl: "INSERTA_AQUI_EL_ENLACE_DE_TU_NUBE_3"
            },
            {
                name: "Ejemplos de Análisis.docx",
                size: "89 KB",
                type: "Word",
                downloadUrl: "INSERTA_AQUI_EL_ENLACE_DE_TU_NUBE_4"
            }
        ]
    },
    {
        id: 103,
        task: "Línea de tiempo S.XIX",
        teacher: "Prof. Diana Prince",
        deadline: "2025-05-10",
        status: "Pendiente",
        description: "Crear una línea de tiempo interactiva que muestre los eventos más importantes del siglo XIX a nivel mundial. La línea debe incluir eventos políticos, sociales, culturales y tecnológicos, con imágenes y descripciones breves de cada acontecimiento.",
        requirements: [
            "Mínimo 20 eventos históricos relevantes",
            "Incluir imágenes representativas de cada evento",
            "Descripción de 50-100 palabras por evento",
            "Formato digital (PowerPoint, Prezi o similar)",
            "Presentación visual atractiva y organizada"
        ],
        attachments: [
            {
                name: "Plantilla Línea de Tiempo.pptx",
                size: "512 KB",
                type: "PowerPoint",
                downloadUrl: "INSERTA_AQUI_EL_ENLACE_DE_TU_NUBE_5"
            },
            {
                name: "Lista de Eventos Sugeridos.pdf",
                size: "198 KB",
                type: "PDF",
                downloadUrl: "INSERTA_AQUI_EL_ENLACE_DE_TU_NUBE_6"
            }
        ]
    }
];

// --- Base de datos de Recursos de Comunicación ---
const recursosDB = [
    {
        id: 1,
        title: "Manual de Redacción Periodística",
        description: "Guía completa sobre técnicas de redacción para medios de comunicación",
        type: "PDF",
        urlView: "INSERTA_AQUI_EL_ENLACE_PARA_VER_1",
        urlDownload: "INSERTA_AQUI_EL_ENLACE_PARA_DESCARGAR_1"
    },
    {
        id: 2,
        title: "Teorías de la Comunicación",
        description: "Documento académico sobre las principales teorías comunicativas",
        type: "PDF",
        urlView: "INSERTA_AQUI_EL_ENLACE_PARA_VER_2",
        urlDownload: "INSERTA_AQUI_EL_ENLACE_PARA_DESCARGAR_2"
    },
    {
        id: 3,
        title: "Guía de Producción Audiovisual",
        description: "Manual práctico para la producción de contenido audiovisual",
        type: "PDF",
        urlView: "INSERTA_AQUI_EL_ENLACE_PARA_VER_3",
        urlDownload: "INSERTA_AQUI_EL_ENLACE_PARA_DESCARGAR_3"
    },
    {
        id: 4,
        title: "Comunicación Organizacional",
        description: "Estrategias y técnicas de comunicación en organizaciones",
        type: "PPTX",
        urlView: "INSERTA_AQUI_EL_ENLACE_PARA_VER_4",
        urlDownload: "INSERTA_AQUI_EL_ENLACE_PARA_DESCARGAR_4"
    },
    {
        id: 5,
        title: "Semiótica y Análisis del Discurso",
        description: "Introducción al análisis semiótico y del discurso comunicativo",
        type: "PDF",
        urlView: "INSERTA_AQUI_EL_ENLACE_PARA_VER_5",
        urlDownload: "INSERTA_AQUI_EL_ENLACE_PARA_DESCARGAR_5"
    },
    {
        id: 6,
        title: "Marketing Digital y Redes Sociales",
        description: "Estrategias de comunicación digital y gestión de redes sociales",
        type: "PDF",
        urlView: "INSERTA_AQUI_EL_ENLACE_PARA_VER_6",
        urlDownload: "INSERTA_AQUI_EL_ENLACE_PARA_DESCARGAR_6"
    },
    {
        id: 7,
        title: "Ética Periodística",
        description: "Principios éticos en el ejercicio del periodismo",
        type: "DOCX",
        urlView: "INSERTA_AQUI_EL_ENLACE_PARA_VER_7",
        urlDownload: "INSERTA_AQUI_EL_ENLACE_PARA_DESCARGAR_7"
    },
    {
        id: 8,
        title: "Comunicación Intercultural",
        description: "Guía sobre comunicación en contextos multiculturales",
        type: "PDF",
        urlView: "INSERTA_AQUI_EL_ENLACE_PARA_VER_8",
        urlDownload: "INSERTA_AQUI_EL_ENLACE_PARA_DESCARGAR_8"
    }
];

// --- Referencias al DOM ---
const filesGrid = document.getElementById('files-grid');
const assignmentsBody = document.getElementById('assignments-body');
const recursosContainer = document.getElementById('recursos-container');
const docentesGrid = document.getElementById('docentes-grid');
const estudiantesGrid = document.getElementById('estudiantes-grid');

const sectionRepositorio = document.getElementById('repositorio');
const sectionTrabajos = document.getElementById('trabajos');
const sectionRecursos = document.getElementById('recursos');
const sectionDocentes = document.getElementById('docentes');
const sectionEstudiantes = document.getElementById('estudiantes');

const tabRepositorio = document.getElementById('tab-repositorio');
const tabTrabajos = document.getElementById('tab-trabajos');
const tabRecursos = document.getElementById('tab-recursos');
const tabDocentes = document.getElementById('tab-docentes');
const tabEstudiantes = document.getElementById('tab-estudiantes');

const profileModal = document.getElementById('profileModal');
const modalProfileImage = document.getElementById('modalProfileImage');
const modalProfileInfo = document.getElementById('modalProfileInfo');
const detailsModal = document.getElementById('detailsModal');

// --- Función para Renderizar Archivos ---
function renderFiles(filter = 'all') {
    filesGrid.innerHTML = '';
    const filteredFiles = filter === 'all'
        ? filesDB
        : filesDB.filter(file => file.area === filter);
    
    if (filteredFiles.length === 0) {
        filesGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #666;">No se encontraron archivos en esta categoría.</p>';
        return;
    }
    
    filteredFiles.forEach(file => {
        const teacher = teachersDB[file.teacher];
        const card = document.createElement('div');
        card.classList.add('file-card');
        card.innerHTML = `
            <div class="card-header">
                <i class="fa-regular fa-file-pdf file-icon"></i>
                <span class="badge">${file.area}</span>
            </div>
            <h3 class="file-title">${file.title}</h3>
            <div class="file-details">
                <p><i class="fa-regular fa-calendar"></i> ${file.date}</p>
                <div class="teacher-profile">
                    <img src="${teacher.photo}" 
                         alt="${teacher.name}" 
                         class="teacher-avatar"
                         onclick="openProfileModal('${file.teacher}')">
                    <span class="teacher-name">${teacher.name}</span>
                </div>
            </div>
            <div class="card-actions">
                <a href="${file.urlView}" target="_blank" class="btn btn-view">
                    <i class="fa-regular fa-eye"></i> Ver
                </a>
                <a href="${file.urlDownload}" download class="btn btn-download">
                    <i class="fa-solid fa-download"></i> Descargar
                </a>
            </div>
        `;
        filesGrid.appendChild(card);
    });
}

// --- Función para Renderizar Trabajos ---
function renderAssignments() {
    assignmentsBody.innerHTML = '';
    assignmentsDB.forEach(work => {
        const teacher = teachersDB[work.teacher];
        let statusClass = '';
        switch(work.status) {
            case 'Pendiente': statusClass = 'status-pending'; break;
            case 'Entregado': statusClass = 'status-submitted'; break;
            case 'Atrasado': statusClass = 'status-late'; break;
        }
        
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${work.task}</td>
            <td>
                <div class="teacher-cell">
                    <img src="${teacher.photo}" 
                         alt="${teacher.name}" 
                         class="teacher-avatar-table"
                         onclick="openProfileModal('${work.teacher}')">
                    <div class="teacher-info">
                        <span class="teacher-info-name">${teacher.name}</span>
                        <span class="teacher-info-title">${teacher.title}</span>
                    </div>
                </div>
            </td>
            <td>${work.deadline}</td>
            <td><span class="status-badge ${statusClass}">${work.status}</span></td>
            <td><button class="btn btn-view" style="padding: 5px 10px; font-size: 0.8rem;" onclick="openDetailsModal(${work.id})">Detalles</button></td>
        `;
        assignmentsBody.appendChild(row);
    });
}

// --- Función para Renderizar Recursos ---
function renderRecursos() {
    recursosContainer.innerHTML = '';
    
    if (recursosDB.length === 0) {
        recursosContainer.innerHTML = '<p style="text-align: center; color: #666;">No hay recursos disponibles en este momento.</p>';
        return;
    }
    
    recursosDB.forEach(recurso => {
        const recursoItem = document.createElement('div');
        recursoItem.classList.add('recurso-item');
        
        // Determinar el icono según el tipo de archivo
        let icon = 'fa-file';
        if (recurso.type === 'PDF') icon = 'fa-file-pdf';
        else if (recurso.type === 'DOCX' || recurso.type === 'DOC') icon = 'fa-file-word';
        else if (recurso.type === 'PPTX' || recurso.type === 'PPT') icon = 'fa-file-powerpoint';
        else if (recurso.type === 'XLSX' || recurso.type === 'XLS') icon = 'fa-file-excel';
        
        recursoItem.innerHTML = `
            <div class="recurso-info">
                <i class="fa-solid ${icon} recurso-icon"></i>
                <div class="recurso-details">
                    <h3 class="recurso-title">${recurso.title}</h3>
                    <p class="recurso-description">${recurso.description}</p>
                </div>
            </div>
            <div class="recurso-actions">
                <a href="${recurso.urlView}" target="_blank" class="btn btn-view">
                    <i class="fa-regular fa-eye"></i> Ver
                </a>
                <a href="${recurso.urlDownload}" download class="btn btn-download">
                    <i class="fa-solid fa-download"></i> Descargar
                </a>
            </div>
        `;
        
        recursosContainer.appendChild(recursoItem);
    });
}

// --- Función para Renderizar Docentes ---
function renderDocentes() {
    docentesGrid.innerHTML = '';
    
    const teachersArray = Object.values(teachersDB);
    
    if (teachersArray.length === 0) {
        docentesGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #666;">No hay docentes registrados.</p>';
        return;
    }
    
    teachersArray.forEach(teacher => {
        const docenteCard = document.createElement('div');
        docenteCard.classList.add('docente-card');
        
        docenteCard.innerHTML = `
            <img src="${teacher.photo}" alt="${teacher.name}" class="docente-avatar-large">
            <h3 class="docente-name">${teacher.name}</h3>
            <p class="docente-title">${teacher.title}</p>
            <div class="docente-info">
                <p><i class="fa-solid fa-envelope"></i> ${teacher.email}</p>
                <p><i class="fa-solid fa-phone"></i> ${teacher.phone}</p>
            </div>
        `;
        
        docentesGrid.appendChild(docenteCard);
    });
}

// --- Función para Renderizar Estudiantes ---
function renderEstudiantes() {
    estudiantesGrid.innerHTML = '';
    
    if (studentsDB.length === 0) {
        estudiantesGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #666;">No hay estudiantes registrados.</p>';
        return;
    }
    
    studentsDB.forEach(student => {
        const estudianteCard = document.createElement('div');
        estudianteCard.classList.add('estudiante-card');
        
        estudianteCard.innerHTML = `
            <img src="${student.photo}" alt="${student.name}" class="estudiante-avatar">
            <h3 class="estudiante-name">${student.name}</h3>
            <p class="estudiante-code">${student.code}</p>
        `;
        
        estudiantesGrid.appendChild(estudianteCard);
    });
}

// --- Función de Filtrado (Botones) ---
function filterFiles(area) {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    renderFiles(area);
}

// --- Función: Cambiar Pestaña ---
function switchTab(tab) {
    // Ocultar todas las secciones
    sectionRepositorio.style.display = 'none';
    sectionTrabajos.style.display = 'none';
    sectionRecursos.style.display = 'none';
    sectionDocentes.style.display = 'none';
    sectionEstudiantes.style.display = 'none';
    
    // Remover clase active de todos los tabs
    tabRepositorio.classList.remove('active');
    tabTrabajos.classList.remove('active');
    tabRecursos.classList.remove('active');
    tabDocentes.classList.remove('active');
    tabEstudiantes.classList.remove('active');
    
    // Mostrar la sección correspondiente
    if (tab === 'repositorio') {
        sectionRepositorio.style.display = 'block';
        tabRepositorio.classList.add('active');
        renderFiles();
    } else if (tab === 'trabajos') {
        sectionTrabajos.style.display = 'block';
        tabTrabajos.classList.add('active');
        renderAssignments();
    } else if (tab === 'recursos') {
        sectionRecursos.style.display = 'block';
        tabRecursos.classList.add('active');
        renderRecursos();
    } else if (tab === 'docentes') {
        sectionDocentes.style.display = 'block';
        tabDocentes.classList.add('active');
        renderDocentes();
    } else if (tab === 'estudiantes') {
        sectionEstudiantes.style.display = 'block';
        tabEstudiantes.classList.add('active');
        renderEstudiantes();
    }
}

// --- Función: Abrir Modal de Perfil ---
function openProfileModal(teacherName) {
    const teacher = teachersDB[teacherName];
    if (!teacher) return;
    
    modalProfileImage.src = teacher.photo;
    modalProfileImage.alt = teacher.name;
    modalProfileInfo.innerHTML = `
        <h3>${teacher.name}</h3>
        <p><strong>${teacher.title}</strong></p>
        <p><i class="fa-solid fa-envelope"></i> ${teacher.email}</p>
        <p><i class="fa-solid fa-phone"></i> ${teacher.phone}</p>
    `;
    
    profileModal.style.display = 'block';
}

// --- Función: Cerrar Modal de Perfil ---
function closeProfileModal() {
    profileModal.style.display = 'none';
}

// --- Función: Abrir Modal de Detalles del Trabajo ---
function openDetailsModal(assignmentId) {
    const assignment = assignmentsDB.find(a => a.id === assignmentId);
    if (!assignment) return;

    const teacher = teachersDB[assignment.teacher];
    
    // Llenar el contenido del modal
    document.getElementById('detailsTaskName').textContent = assignment.task;
    document.getElementById('detailsTeacher').textContent = assignment.teacher;
    document.getElementById('detailsDeadline').textContent = assignment.deadline;
    
    // Estado con badge
    let statusClass = '';
    switch(assignment.status) {
        case 'Pendiente': statusClass = 'status-pending'; break;
        case 'Entregado': statusClass = 'status-submitted'; break;
        case 'Atrasado': statusClass = 'status-late'; break;
    }
    document.getElementById('detailsStatus').innerHTML = `<span class="status-badge ${statusClass}">${assignment.status}</span>`;
    
    // Descripción
    document.getElementById('detailsDescription').textContent = assignment.description;
    
    // Requisitos
    const requirementsList = document.getElementById('detailsRequirements');
    requirementsList.innerHTML = '';
    assignment.requirements.forEach(req => {
        const li = document.createElement('li');
        li.textContent = req;
        requirementsList.appendChild(li);
    });
    
    // Adjuntos
    const attachmentsList = document.getElementById('detailsAttachments');
    attachmentsList.innerHTML = '';
    if (assignment.attachments && assignment.attachments.length > 0) {
        assignment.attachments.forEach(att => {
            const attachDiv = document.createElement('div');
            attachDiv.classList.add('attachment-item');
            
            let icon = 'fa-file';
            if (att.type === 'PDF') icon = 'fa-file-pdf';
            else if (att.type === 'Word' || att.type === 'DOCX') icon = 'fa-file-word';
            else if (att.type === 'Excel') icon = 'fa-file-excel';
            else if (att.type === 'PowerPoint') icon = 'fa-file-powerpoint';
            
            attachDiv.innerHTML = `
                <div class="attachment-info">
                    <i class="fa-solid ${icon} attachment-icon"></i>
                    <div class="attachment-details">
                        <h5>${att.name}</h5>
                        <p>${att.size}</p>
                    </div>
                </div>
                <a href="${att.downloadUrl}" target="_blank" class="attachment-download">
                    <i class="fa-solid fa-download"></i> Descargar
                </a>
            `;
            attachmentsList.appendChild(attachDiv);
        });
    } else {
        attachmentsList.innerHTML = '<p style="color: #999; font-style: italic;">No hay archivos adjuntos</p>';
    }
    
    // Mostrar modal
    detailsModal.style.display = 'block';
}

// --- Función: Cerrar Modal de Detalles ---
function closeDetailsModal() {
    detailsModal.style.display = 'none';
}

// Cerrar modales al hacer clic fuera de ellos
window.onclick = function(event) {
    if (event.target === profileModal) {
        closeProfileModal();
    }
    if (event.target === detailsModal) {
        closeDetailsModal();
    }
}

// --- Inicialización ---
document.addEventListener('DOMContentLoaded', () => {
    switchTab('repositorio');
});
