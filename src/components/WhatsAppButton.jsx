import React from 'react'
import {MessageCircle} from 'lucide-react'
import {getWhatsAppUrl} from '../config/clinicData'

export default function WhatsAppButton({message, text = 'Agendar por WhatsApp', className = 'btn btn-whatsapp', showIcon = true, size = 'normal', phoneNumber, ...props}) {
  const url = getWhatsAppUrl(message, phoneNumber)
  const sizeClass = size === 'large' ? 'btn-lg' : ''
  return <a href={url} target="_blank" rel="noopener noreferrer" className={`${className} ${sizeClass}`} aria-label={`${text} (Abre conversación en WhatsApp)`} {...props}>{showIcon && <MessageCircle size={20} />}<span>{text}</span></a>
}
