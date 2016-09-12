<?php
class ControllerModuleCloudzoom extends Controller {
	private $error = array();

	public function index() {
		$this->load->language('module/cloudzoom');

		$this->document->setTitle($this->language->get('heading_title'));

		$this->load->model('setting/setting');

		if (($this->request->server['REQUEST_METHOD'] == 'POST') && $this->validate()) {
			$this->model_setting_setting->editSetting('cloudzoom', $this->request->post);

			$this->session->data['success'] = $this->language->get('text_success');

			$this->response->redirect($this->url->link('extension/module', 'token=' . $this->session->data['token'], 'SSL'));
		}

		$data['heading_title'] = $this->language->get('heading_title');

		$data['text_edit'] = $this->language->get('text_edit');
		$data['text_enabled'] = $this->language->get('text_enabled');
		$data['text_disabled'] = $this->language->get('text_disabled');
		
		$data['text_cloudzoom'] = $this->language->get('text_cloudzoom');
		$data['text_innerzoom'] = $this->language->get('text_innerzoom');

		$data['text_small'] = $this->language->get('text_small');
		$data['text_medium'] = $this->language->get('text_medium');
		$data['text_large'] = $this->language->get('text_large');
		$data['text_bottom'] = $this->language->get('text_bottom');
		$data['text_left'] = $this->language->get('text_left');
		
		$data['entry_status'] = $this->language->get('entry_status');
		
		$data['entry_image_zoom'] = $this->language->get('entry_image_zoom');
		$data['entry_status'] = $this->language->get('entry_status');
		$data['entry_size'] = $this->language->get('entry_size');		
		$data['entry_position_addimg'] = $this->language->get('entry_position_addimg');		
		$data['entry_style'] = $this->language->get('entry_style');		

		$data['button_save'] = $this->language->get('button_save');
		$data['button_cancel'] = $this->language->get('button_cancel');

		if (isset($this->error['warning'])) {
			$data['error_warning'] = $this->error['warning'];
		} else {
			$data['error_warning'] = '';
		}

		$data['breadcrumbs'] = array();

		$data['breadcrumbs'][] = array(
			'text' => $this->language->get('text_home'),
			'href' => $this->url->link('common/dashboard', 'token=' . $this->session->data['token'], 'SSL')
		);

		$data['breadcrumbs'][] = array(
			'text' => $this->language->get('text_module'),
			'href' => $this->url->link('extension/module', 'token=' . $this->session->data['token'], 'SSL')
		);

		$data['breadcrumbs'][] = array(
			'text' => $this->language->get('heading_title'),
			'href' => $this->url->link('module/cloudzoom', 'token=' . $this->session->data['token'], 'SSL')
		);

		$data['action'] = $this->url->link('module/cloudzoom', 'token=' . $this->session->data['token'], 'SSL');

		$data['cancel'] = $this->url->link('extension/module', 'token=' . $this->session->data['token'], 'SSL');

		if (isset($this->request->post['cloudzoom'])) {
			$data['cloudzoom'] = $this->request->post['cloudzoom'];
		} else {
			$data['cloudzoom'] = $this->config->get('cloudzoom');
		}

		$data['header'] = $this->load->controller('common/header');
		$data['column_left'] = $this->load->controller('common/column_left');
		$data['footer'] = $this->load->controller('common/footer');

		$this->response->setOutput($this->load->view('module/cloudzoom.tpl', $data));
	}

	protected function validate() {
		if (!$this->user->hasPermission('modify', 'module/cloudzoom')) {
			$this->error['warning'] = $this->language->get('error_permission');
		}

		return !$this->error;
	}
}