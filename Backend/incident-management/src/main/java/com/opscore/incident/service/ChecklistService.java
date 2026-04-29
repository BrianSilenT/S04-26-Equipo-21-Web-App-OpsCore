package com.opscore.incident.service;

import com.opscore.incident.model.Checklist;

public interface ChecklistService {
    Checklist crearChecklist(Checklist checklist);
    Checklist actualizarChecklist(Long id, Boolean cumplido);
}
